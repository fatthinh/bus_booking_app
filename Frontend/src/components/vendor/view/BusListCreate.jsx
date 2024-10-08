import React, { useEffect, useState } from 'react'
import { VendorAxios, VendorImgAxios } from '../../api/api_instance'
import { TError, TSuccess } from '../../toastify/Toastify';
import {  useSelector } from 'react-redux';

function BusListCreate() {
    const [BusList, setBusList] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [Capacity, setCapacity] = useState('')
    const [busName, setBusName] = useState('')
    const [BusNumber, setBusNumber] = useState('')
    const [busPic, setBusPic] = useState(null);
    const { userId } = useSelector(state => state.authentication_user)


    const [file, setFile] = useState([]);

    const FetchBusLists = () =>{
    VendorAxios.get(`/vendor/bus/list/${userId}`).then((res) => {
        setBusList(res.data)
    }).catch((err) => {
        
        // if(err.response.status == 401){
        //     await DispatchAuth(dispatch)
        // }
        console.log(err)
    })}
    useEffect(() => {
        FetchBusLists()
    }, [])

    function handleImgChange(e) {
        setBusPic(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    const handleSubmit = async () => {
        let isValid = true;
        if (busName.trim() == '') {
            TError('Bus name is required')
            return
            // console.error('Bus name is required');
            isValid = false;
        }
        else if (!Capacity) {
            TError('Capacity should not be blank')
            console.error('Capacity is required');
            isValid = false;
        }
        else if (!BusNumber) {

            console.error('Bus number is required');
            isValid = false;
        }
        else if(BusNumber.length>11){
            TError('Bus Number should be less than 11 character')
            return 
        }
        else if(BusNumber.length<4){
            TError('Number should be less than 5 character')
            return
        }

        if (!busPic) {
            console.error('Bus picture is required');
            isValid = false;
        }
        if (isValid) {
            
        console.log(userId);
        console.log(typeof(userId));
            const formData = new FormData();
            formData.append('seating_capacity', Capacity);
            formData.append('bus_name', busName);
            formData.append('bus_number', BusNumber);
            formData.append('identify_img', busPic);
            formData.append('user_id', userId);
            console.log(userId);
            await VendorImgAxios.post('/vendor/bus/create', formData).then((res) => {
                TSuccess('Created successfully')
                setShowModal(false);
                setBusName('')
                setBusPic({})
                FetchBusLists()
            }).catch((err) => {
                console.log(err);
            })
        }
    }



return (
    <div>
        {showModal ? (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t w-80">
                                <h3 className="text-3xl font-semibold">
                                    OTP
                                </h3>

                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                <form className="p-4 md:p-5">
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Bus Name:  </label><p></p>
                                            <input defaultValue={busName} onChange={(e) => setBusName(e.target.value)} type="text" name="otp" id="name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Bus Name" required="" />
                                        </div>
                                    </div>
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Bus number:  </label><p></p>
                                            <input defaultValue={BusNumber} onChange={(e) => setBusNumber(e.target.value)} type="text" name="otp" id="name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Bus Number" required="" />
                                        </div>
                                    </div>
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Seating Capacity:  </label><p></p>
                                            <input defaultValue={Capacity} onChange={(e) => setCapacity(e.target.value)} type="number" name="otp" id="name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Seating Capacity" required="" />
                                        </div>
                                    </div>

                                    <label className='font-mono text-sm mt-2 -mb-3'>Upload Bus Pic</label>
                                    <input type="file" onChange={handleImgChange} />
                                    <img className='max-w-56 max-h-44' src={file} />

                                </form>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">

                <label htmlFor="table-search" className="sr-only">
                    Create Bus
                </label>
                <div className="relative">
                    <button className='mx-5 mt-4 rounded-xl p-2 pl-7 pr-7 bg-green-600' onClick={() => setShowModal(true)}>Create</button>
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-all-search" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Bus number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total seat
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Seat available
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {BusList.map((bus) => {
                        return (

                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input
                                            id="checkbox-table-search-1"
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">
                                            checkbox
                                        </label>
                                    </div>
                                </td>
                                
                                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img
                                        className="w-10 h-10 rounded-full"
                                        src={bus.identify_img}
                                        alt="Jese image"
                                    />
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">{bus.bus_name}</div>
                                        <div className="font-normal text-gray-500"></div>
                                    </div>
                                </th>

                                <td className="px-6 py-4">{bus.bus_number}</td>
                                <td className="px-6 py-4">{bus.seating_capacity}</td>
                                <td className="px-6 py-4">{bus.available_seats}</td>
                                <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </a>
                                </td>

                            </tr>

                        )
                    })}


                </tbody>
            </table>
            {BusList.length == 0?<div className='text-center p-4 m-6 font-bold'>No bus are Created</div>:null}

        </div>

    </div>
)
}

export default BusListCreate