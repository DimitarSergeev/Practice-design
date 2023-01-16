import styles from './Header.module.css'

export const Header = ()=>{
    return(
        
            <header>
                 <ul className={styles.container}>
                    <li className={styles['nav-item']}>Landing Page</li>
                    <li className={styles['nav-item']}>Product One</li>
                    <li className={styles['nav-item']}>Product Two</li>
                    <li className={styles['nav-item']}>Form</li>
                 </ul>
            </header>
        
    )
}