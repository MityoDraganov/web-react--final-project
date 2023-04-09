import { useNavigate } from "react-router-dom";


import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export const UserLogout = () =>{


    const {setAuth} = useContext(AuthContext)

    localStorage.clear()

    setAuth({
        _id: null,
        token: null,
    })

    
}