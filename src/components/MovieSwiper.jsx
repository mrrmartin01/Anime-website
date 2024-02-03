import React from 'react';
import './movieswiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
// import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function MovieSwiper({slides}) {
  return (
    <Swiper
        effect={'coverflow'}
        grabCursor= {true}
        centeredSlides = {true}
        slidesPerView={'auto'}
        autoplay = {{
            display: 2500,
            disableOnInteraction: false,
        }}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
        }}
        loop={true}
        modules={[Autoplay,  EffectCoverflow]}
        className='movieSwiper'>
           {
            slides.map(slide=> (
                <SwiperSlide>
                <img src={slide.previewImg} alt="Preview of Anime" />
            </SwiperSlide>
            ))
           }
    </Swiper>
  );
}

export default MovieSwiper
