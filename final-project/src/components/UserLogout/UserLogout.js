import { useNavigate } from "react-router-dom";


import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export const UserLogout = ({history}) =>{
    const navigate = useNavigate()


    const {setAuth} = useContext(AuthContext)

    localStorage.clear()

    setAuth({
        _id: null,
        token: null,
    })

    
}