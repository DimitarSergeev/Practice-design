import styles from './ProductChair.module.css'

import chairIMG from './chairImg.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const ProductChair = () => {
    return (
        <article className={styles.container} >
            <div className={styles['img-container']}>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide >
                        <img src={chairIMG} alt="nqma" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={chairIMG} alt="nqma" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={chairIMG} alt="nqma" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={styles['info-container']}>
                <div className={styles['basic-info']}>
                    <span className={styles.type}>Chairs</span>
                    <h1 className={styles.title}>Modern Yellow Chair</h1>
                    <h2 className={styles['title-desc']}>Tinners House</h2>
                    <div className={styles['price-rating']}>
                        <h2 className={styles.price}>$420</h2>
                        <div className={styles['rating-icons']}>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
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
                            vehicula at vitae ipsum... read more
                        </p>
                    </div>

                    <div className={styles['order-info']}>
                        <div className={styles['color-container']}>
                            <label htmlFor="color">COLOR</label>
                            <select name="color" id="color">
                                <option value="yellow">Yellow</option>
                                <option value="green">Green</option>
                                <option value="red">Red</option>
                            </select>
                        </div>
                        <div className={styles['color-container']}>
                            <label htmlFor="color">QUANTITY</label>
                            <input type="text" defaultValue='1' />
                        </div>
                        <div className={styles['color-container']}>
                            <label htmlFor="totlaPrice">TOTAL PRICE</label>
                            <span className={styles['total-price']} id='totlaPrice'>$840</span>
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