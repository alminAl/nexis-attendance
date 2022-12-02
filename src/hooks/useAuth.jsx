import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"


const useAuth = () => {
    const {isauthenticated, setAuthenticated} = useContext(AuthContext)


  return {
    isauthenticated, setAuthenticated
  }
}

export default useAuth