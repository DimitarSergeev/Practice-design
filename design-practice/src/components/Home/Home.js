import styles from './Home.module.css'

import mask from './mask.png'


export const Home = () => {
    return (
        <section className={styles.container}>
            <div className={styles.info}>

                <h1 className={styles.title}>The Art of Hiring</h1>
                <p className={styles.desc}>
                    Do you need an artist breathe art into your
                    product, marketing campaign or creative project?
                    Here’s the super easy platform to find the perfect
                    illustrator, 2D or 3D artist. Connect and make it
                    beautiful!
                </p>

                <div className={styles['btn-container']}>
                    <button className={styles['hire-btn']}>HIRE ARTIST</button>
                    <button className={styles['how-works']}>HOW IT WORKS</button>
                </div>

                <div className={styles.icons}>

                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-instagram"></i>

                </div>
            </div>

            <div className={styles['img-container']}>
                <img src={mask} alt="nqma" />
            </div>
        </section>
    )
}