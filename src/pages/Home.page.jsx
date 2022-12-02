
import AttendanceInformation from "../components/attendance/AttendanceInformation"
import Login from "../components/authentication/Login"
import useAuth from "../hooks/useAuth"



const HomePage = () => {
    const {isauthenticated} = useAuth()
    return (
        <div>
            {
                isauthenticated ? <AttendanceInformation /> : <Login />
            }   
             
        </div>
    )
}

export default HomePage