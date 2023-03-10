import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'
export const Navigation = () => {
    return(
    <nav className={styles['navigation-nav']}>


        <ul className={styles['navigation-ul']}>
            <li className={styles['navigation-li']} ><Link className={styles['navigation-a']} to="/">Home</Link></li>
            <li className={styles['navigation-li']} ><Link className={styles['navigation-a']} to="/users/register">Register</Link></li>
            <li className={styles['navigation-li']} ><Link className={styles['navigation-a']} to="/users/login">Login</Link></li>

        </ul>


    </nav>
    )
}