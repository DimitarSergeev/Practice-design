import styles from './ProductChair.module.css'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { SwiperChairs } from './SwiperChairs'
import { OrderInfo } from './OrderInfo'
import { useState } from 'react'

import * as postService from '../../services/orderService'

export const ProductChair = () => {
    const onePicePrice = 420

    const [orderData, setOrderData] = useState({})

    const MySwal = withReactContent(Swal)

    const addTo = () => {
        postService.postData(orderData)
            .then(() => {
                MySwal.fire({
                    title: <strong>Good job!</strong>,
                    html: <i>The product has been added!</i>,
                    icon: 'success'
                })
            })
            .catch(() => {
                MySwal.fire({
                    title: <strong>Someting went wrong ! </strong>,
                    icon: 'error'
                })
            })
    }

    return (
        <article className={styles.container} >

            <div className={styles['img-container']}>
                <span className={styles.code}>RT34FY</span>
                <SwiperChairs />
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

                    <OrderInfo
                        onePicePrice={onePicePrice}
                        setOrderData={setOrderData}
                    />

                    <div className={styles['action-btns']}>
                        <button className={styles['action-wishList']} onClick={addTo}>ADD TO MY WISHLIST</button>
                        <button className={styles['action-add']} onClick={addTo}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </article>
    )
}