import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'


export const Header = () => {
    return (

        <header>

            <div className={styles.container}>
                <NavLink to='/' className={styles['nav-item']}>Landing Page</NavLink>
                <NavLink to='/product-chair' className={styles['nav-item']}>Product One</NavLink>
                <NavLink to='/product-two' className={styles['nav-item']}>Product Two</NavLink>
                <NavLink to='/form' className={styles['nav-item']}>Form </NavLink>
            </div>

        </header>

    )
}