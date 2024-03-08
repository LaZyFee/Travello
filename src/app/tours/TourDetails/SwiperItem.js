import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperItem = ({ gallery }) => {
    return (

        <div className="w-full h-72">
            <Swiper className="mySwiper">
                {
                    gallery.map(item => (
                        <SwiperSlide key={item.image}>
                            <img src={item.image} alt="tour" className="w-full h-80" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
};

export default SwiperItem;