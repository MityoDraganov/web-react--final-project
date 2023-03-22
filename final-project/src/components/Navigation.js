import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'
import {useNavigate} from 'react-router-dom'

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


export const Navigation = () => {
    const navigate = useNavigate    ()
    const { isAuthenticated, setAuth } = useContext(AuthContext)


    const logoutHandler = () => {
        setAuth({
            _id: null,
            token: null
        })
    
        navigate("/users/login")
    }

    if(isAuthenticated){

        return(
            <nav className={styles['navigation-nav']}>
        
                <ul className={styles['navigation-ul']}>
                    <li className={styles['navigation-li']} ><Link className={styles['navigation-a']} to="">Home</Link></li>
                    <li className={styles['navigation-li']} ><Link className={styles['navigation-a']} to="articles/dashboard">Dashboard</Link></li>
                    <li className={styles['navigation-li']} ><Link className={styles['navigation-a']} to="articles/create">Create article</Link></li>
                    <li className={styles['navigation-li']} onClick={() => logoutHandler()}><a className={styles['navigation-a']}>Logout</a></li>
                </ul>
        
            </nav>
            )


    } else{

        return(

            <nav className={styles['navigation-nav']}>
        
                <ul className={styles['navigation-ul']}>
                    <li className={styles['navigation-li']} ><Link className={styles['navigation-a']} to="">Home</Link></li>
                    <li className={styles['navigation-li']} ><Link className={styles['navigation-a']} to="articles/dashboard">Dashboard</Link></li>
                    <li className={styles['navigation-li']} ><Link className={styles['navigation-a']} to="users/register">Register</Link></li>
                    <li className={styles['navigation-li']} ><Link className={styles['navigation-a']} to="users/login">Login</Link></li>
                </ul>
        
            </nav>
            )

    }
    
}