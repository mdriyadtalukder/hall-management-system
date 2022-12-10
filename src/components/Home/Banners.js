import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
import './stylee.css'
const Banners = () => {
    return (
        <div id='header'>
            <h1 className='text-center mb-5 text-bold'>Life at hall</h1>
            <Swiper
                slidesPerView={3} // ekhne 3 er jaigai 1 dile 1 ta div er slide show krbe
                spaceBetween={30}
                slidesPerGroup={3} // ekhne 3 er jaigai 1 dile 1 ta div er slide show krbe
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://digitalsenior.sg/wp-content/uploads/2013/12/144128_28861.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide><img src="https://43b193e0130d22d5e528-cda2f4502e9f8900c060abc18085db54.ssl.cf6.rackcdn.com/UNIC_UON_Halls_220719_0073.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://zula.sg/wp-content/uploads/2020/02/university-hall-life-2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.smith.edu/sites/default/files/media/Documents/Reslife/photo-about-800.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.uml.edu/Images/VT-Fox-double_tcm18-353462.JPG?w=l" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.uml.edu/Images/leitch-exterior-1400_tcm18-224128.jpg?w=l" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://face.net/wp-content/uploads/2018/10/Library-3-Featured-Image-1200x628.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide><img src="https://www.city.ac.uk/__data/assets/image/0006/576897/varieties/breakpoint-max.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://d378tfy1f2jvwf.cloudfront.net/media/15716/field-1.png" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banners;