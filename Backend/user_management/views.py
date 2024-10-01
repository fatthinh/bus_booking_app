from django.shortcuts import render, redirect
from account.models import Account
from vendor.models import Route, BusDetail
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import TicketOrder, Payment
from .serializers import UserDetailSerializer, UserBusListSerializer, TicketOrderSerializer, TicketDetailSerializer, RouteSerializer
from vendor.serializers import RouteWayPointDetailSerializer
from .serializers import UserAvailableRouteView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView, View
from datetime import datetime, timedelta
import json
from decouple import config
import stripe
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.http import HttpResponse

# Create your views here.
stripe.api_key = config('STRIPE_SECRET_KEY')


class UserDetail(generics.RetrieveAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = Account.objects.all()
    serializer_class = UserDetailSerializer
    lookup_field = 'id'


class UserUpdateDetailView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Account.objects.all()
    serializer_class = UserDetailSerializer
    lookup_field = 'id'


# List all the Bus Route Details
class BusRouteListView(generics.ListAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteWayPointDetailSerializer

# Create Ticket Order


class TicketOrderCreateView(generics.CreateAPIView):
    serializer_class = TicketOrderSerializer
    queryset = TicketOrder.objects.all()


class TicketOrderDetailView(generics.RetrieveAPIView):
    serializer_class = TicketDetailSerializer
    queryset = TicketOrder.objects.all()
    lookup_field = 'ticket_order_id'


class TicketOrderListView(generics.ListAPIView):
    serializer_class = TicketDetailSerializer
    queryset = TicketOrder.objects.all()

    def get_queryset(self):
        user_id = self.kwargs.get('id')
        print(user_id)
        queryset = TicketOrder.objects.filter(
            user_id=user_id, status='Delivered')
        return queryset


class UserAvailableRouteView(APIView):
    serializer_class = UserAvailableRouteView

    def get(self, request, start_id, end_id):
        print(start_id, end_id)

        # Bus Start from start_id and End at end_id
        route1 = Route.objects.filter(
            origin__id=start_id, destination__id=end_id)

        # start_id and end_id is in between waypoint
        route2 = Route.objects.filter(waypoints__stop__id=start_id).filter(
            waypoints__stop__id=end_id)

        # Bus Start from start_id and end_id is in b/t waypoint
        route3 = Route.objects.filter(
            waypoints__stop__id=end_id, origin__id=start_id)

        route3 = Route.objects.filter(
            waypoints__stop__id=start_id, destination__id=end_id)

        print(route3)

        # Bus Start from wayPoint, But never reach end point
        # ? you can include this later

        bus_stand_route = self.serializer_class(route1, many=True).data
        waypoint_routes = self.serializer_class(route2, many=True).data
        route3_data = self.serializer_class(route3, many=True).data
        # end_routes_data = self.serializer_class(end_routes, many=True).data
        # waypoint_routes_data = self.serializer_class(waypoint_routes, many=True).data

        combined_data = bus_stand_route + waypoint_routes + route3_data
        # combined_data = route1 + route2 + route3
        # print(self.serializer_class(combined_data))

        return Response(combined_data)

        # return Response({
        #     'bus_stand_route': bus_stand_route,
        #     'combined_data': combined_data,
        #     'waypoint_routes': waypoint_routes,
        #     'route3': route3,
        # }, status=status.HTTP_200_OK)


class AvailableDateView(APIView):
    serializer_class = RouteSerializer

    def get(self, request, route_id):
        try:
            start_stop = int(request.GET.get('start_stop'))
            end_stop = int(request.GET.get('end_stop'))
        except ValueError:
            return Response({'error': 'Invalid start_stop or end_stop ID format'}, status=status.HTTP_400_BAD_REQUEST)
        route_detail = Route.objects.get(id=route_id)
        points = self.serializer_class(route_detail).data
        for i in points['list_stops']:
            if i['stop'] == start_stop:
                start_stop = i
            if i['stop'] == end_stop:
                end_stop = i
        # To get today's date
        current_date = datetime.now().date()

        # Function to combine date and time
        def start_datetime(date, time): return datetime.combine(date, time)

        list_dates = []
        if (start_datetime(current_date + timedelta(hours=1), start_stop['reaching_time']) < datetime.now()):
            current_date += timedelta(days=1)
        for _ in range(3):
            end_date_time = start_datetime(
                current_date, end_stop['reaching_time'])
            date_time = start_datetime(
                current_date, start_stop['reaching_time'])
            day = date_time.strftime('%A')
            list_dates.append(
                {'date_time': date_time, 'day': date_time.day, 'end_date_time': end_date_time})
            current_date += timedelta(days=1)
        return Response(list_dates, status=status.HTTP_200_OK)


# !This is off no use
class UpdateUsers(generics.UpdateAPIView):
    serializer_class = UserDetailSerializer
    queryset = Account.objects.all()
    lookup_field = 'id'


# Stripe payment
class StripeCheckoutView(APIView):
    def post(self, request, *args, **kwargs):
        ticket_id = self.kwargs["ticket_id"]
        ticket = TicketOrder.objects.get(ticket_order_id=ticket_id)

        try:
            bus = ticket.route_id.bus_detail
            bus.available_seats = bus.available_seats - ticket.quantity
            bus.save()
            # ticket.quantity = quantity
            ticket.save()

            print(bus)

            checkout_session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=[
                    {
                        'price_data': {
                            'currency': 'vnd',
                            'unit_amount': int(ticket.route_id.price * ticket.quantity),
                            'product_data': {
                                'name': ticket.route_id,
                            },

                        },
                        'quantity': ticket.quantity,
                    },
                ],
                metadata={
                    "provider_order_id": ticket_id
                },
                mode='payment',
                success_url=config("SITE_URL") + '/success/',
                cancel_url=config("SITE_URL") + '/cancel/',
            )

            if Payment.objects.filter(ticket=ticket).exists():
                Payment.objects.get(ticket=ticket).delete()
            Payment.objects.create(amount=int(
                ticket.route_id.price * ticket.quantity), provider_order_id=ticket_id, ticket=ticket)

            return redirect(checkout_session.url)

        except:
            return Response(
                {'error': 'Something went wrong when creating stripe checkout session'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


@csrf_exempt
def stripe_webhook(request):
    endpoint_secret = config("STRIPE_ENDPOINT_SECRET")
    payload = request.body
    sig_header = request.META["HTTP_STRIPE_SIGNATURE"]
    # event = None

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except ValueError as e:
        # Invalid payload
        return HttpResponse(status=400)

    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        return HttpResponse(status=400)

    # Handle the checkout.session.completed event
    if event["type"] == "checkout.session.completed":
        session = event['data']['object']  # Retrieve session data
        provider_order_id = session['metadata']['provider_order_id']  # Access metadata

        payment_obj = Payment.objects.get(provider_order_id=provider_order_id)
        payment_obj.status = "Success"
        payment_obj.payment_id = session["id"]
        payment_obj.method = "Stripe"
        payment_obj.save()

        order = TicketOrder.objects.get(id=payment_obj.ticket.id)
        order.status = "Delivered"
        order.total = payment_obj.amount
        order.save()
        print("Payment was successful.")

        # TODO: run some custom code here
    return HttpResponse(status=200)
