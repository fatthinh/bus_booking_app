import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const authentication_user = useSelector((state) => state.authentication_user);

  return (
    <div className="user-home-div bg-white">
      <div className="bg-quote flex items-center justify-center h-screen mx-auto">
        <div className="mx-auto max-w-4xl lg:py-56 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center -translate-y-2/4 sm:-translate-y-1/4">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {/* Chào {authentication_user.name}...{authentication_user.isvendor}, */}
              <br />
              Bắt đầu hành trình của bạn
              <br />
              <span className="text-4xl">Bằng cách tin dùng chúng tôi</span>
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={"/map"}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Xem thêm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
