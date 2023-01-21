import styles from './ProductChair.module.css'

import { SwiperChairs } from './SwiperChairs'


export const ProductChair = () => {
    return (
        <article className={styles.container} >

            <div className={styles['img-container']}>
                <span className={styles.code}>RT34FY</span>
                <SwiperChairs className={styles['swiper-conainer']} />
                <div className="swiper-pagination"></div>
            </div>

            <div className={styles['info-container']}>
                <div className={styles['basic-info']}>
                    <span className={styles.type}>Chairs</span>
                    <h1 className={styles.title}>Modern Yellow Chair</h1>
                    <h2 className={styles['title-desc']}>Tinners House</h2>
                    <div className={styles['price-rating']}>
                        <h2 className={styles.price}>$420</h2>
                        <div className={styles['rating-icons']}>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>

                <div className={styles['desc-container']}>
                    <div className={styles['desc-info']}>
                        <div className={styles['desc-btns']}>
                            <button className={styles['desc-btn']}>DESCRIPTION</button>
                            <button className={styles['desc-btn']}>DETAILS</button>
                            <button className={styles['desc-btn']}>COMMENTS</button>
                        </div>
                        <p className={styles.desc}> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed sagittis quam ac nulla blandit
                            vehicula at vitae ipsum
                        </p>
                    </div>

                    <div className={styles['order-info']}>
                        <div className={styles['order-container']}>
                            <label htmlFor="color">COLOR</label>
                            <div className={styles['color-container']}>
                                <span className={styles.color}></span>
                                <select name="color" id="color">
                                    <option value="yellow" style={{ "background-color": "#ffff00" }}></option>
                                    <option value="green" style={{ "background-color": "#00ff00" }}></option>
                                    <option value="#ff0000" style={{ "background-color": "#ff0000" }}></option>
                                </select>
                            </div>
                        </div>
                        <div className={styles['order-container']}>
                            <label htmlFor="quant">QUANTITY</label>
                            <div className={styles['quantity-container']} id='quant'>
                                <button className={styles['quantity-btn']}>-</button>
                                <p className={styles.pices}>2</p>
                                <button className={styles['quantity-btn']}>+</button>
                            </div>
                        </div>
                        <div className={styles['order-container']}>
                            <label htmlFor="totlaPrice">TOTAL PRICE</label>
                            <div className={styles['total-container']}>
                                <span className={styles['total-price']} id='totlaPrice'>$840</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles['action-btns']}>
                        <button className={styles['action-wishList']}>ADD TO MY WISHLIST</button>
                        <button className={styles['action-add']}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </article>
    )
}