import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';


// import required modules

import styles from './SwiperSlider.module.scss'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';


const SwiperSlider = () => {
	return (
		<>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				// slidesPerView={'5'}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 150,
					modifier: 2.5,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>



					<SwiperSlide>
							<Image src='https://fwmedia.fandomwire.com/wp-content/uploads/2024/03/19091413/deadpool-3.jpg' alt="slide_image" layout='fill'/>
					</SwiperSlide>
					<SwiperSlide>
							<Image src='https://fwmedia.fandomwire.com/wp-content/uploads/2024/03/19091413/deadpool-3.jpg' alt="slide_image" layout='fill'/>
					</SwiperSlide>
					<SwiperSlide>
							<Image src='https://fwmedia.fandomwire.com/wp-content/uploads/2024/03/19091413/deadpool-3.jpg' alt="slide_image" layout='fill'/>
					</SwiperSlide>
					<SwiperSlide>
							<Image src='https://fwmedia.fandomwire.com/wp-content/uploads/2024/03/19091413/deadpool-3.jpg' alt="slide_image" layout='fill'/>
					</SwiperSlide>
					<SwiperSlide>
							<Image src='https://fwmedia.fandomwire.com/wp-content/uploads/2024/03/19091413/deadpool-3.jpg' alt="slide_image" layout='fill'/>
					</SwiperSlide>
					<SwiperSlide>
							<Image src='https://fwmedia.fandomwire.com/wp-content/uploads/2024/03/19091413/deadpool-3.jpg' alt="slide_image" layout='fill'/>
					</SwiperSlide>



			</Swiper >
		</>

	);

}


export default SwiperSlider