import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import AttendanceData from "./AttendanceData"


const AttendanceInformation = () => {
    const {setAuthenticated} = useAuth()
    
    return (
        <>
            <nav className="bg-white px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/images/logo.png"
                            className="mr-3 "
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            onClick={() => setAuthenticated(false)}
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
            <div className="mt-24 w-fit mx-auto">
                <h1 className="p-2 rounded text-xl font-bold  text-center text-white bg-[#1678CB]">Attendance information</h1>
            </div>
            <div className="px-2 sm:px-4 py-2.5  w-full">
                <AttendanceData />
            </div>

        </>


    )
}

export default AttendanceInformation