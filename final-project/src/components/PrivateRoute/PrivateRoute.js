import React, { useContext, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import {useNavigate} from "react-router-dom"

export function PrivateRoute({ path, component: Component, ...props }) {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate()

        if(isAuthenticated){
            return(
                <Component />
            )
        } else{
           
            toast("You must be a logged in user to do this!", {
                onClose: () =>{
                    window.location = "/"
                }
            })
            //window.location = "/"
        }
}
