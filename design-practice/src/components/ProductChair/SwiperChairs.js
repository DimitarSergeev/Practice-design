import styles from './ProductChair.module.css'

import chairIMG from './chairImg.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export const SwiperChairs = () => {
    return (
        <div >

            <Swiper
                loop={true}
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className={styles['swiper-conainer']}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide key={1}>
                    <img src={chairIMG} alt="nqma" />
                </SwiperSlide>
                <SwiperSlide key={2}>
                    <img src={chairIMG} alt="nqma" />
                </SwiperSlide>
                <SwiperSlide key={3}>
                    <img src={chairIMG} alt="nqma" />
                </SwiperSlide>


              
            </Swiper>
        </div>
    )
}