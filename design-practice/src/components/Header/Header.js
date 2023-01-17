import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'


export const Header = () => {
    return (

        <header>
            <ul className={styles.container}>
                <li className={styles['nav-item']}>
                    <NavLink to='/'>Landing Page</NavLink>
                </li>
                <li className={styles['nav-item']}>
                    <NavLink to='/product-one'>Product One</NavLink>
                </li>
                <li className={styles['nav-item']}>
                    <NavLink to='/product-two'>Product Two</NavLink>
                </li>
                <li className={styles['nav-item']}>
                    <NavLink to='/form'>Form</NavLink>
                </li>
            </ul>
        </header>

    )
}