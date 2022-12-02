import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const PublicRouteOutlet = () => {
    const {isauthenticated} = useAuth()
    return isauthenticated ? <Navigate to={"/"} /> : <Outlet />
}

export default PublicRouteOutlet