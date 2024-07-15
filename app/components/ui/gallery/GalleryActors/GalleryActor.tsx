import { FC, useRef } from 'react'
import styles from './GalleryActors.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IGalleryItem } from '../gallery.interface';
import GalleryActorItem from './GalleryActorItem';
import { MaterialIcon } from '../../MaterialIcon';

const GalleryActor: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={'1%'}
				onInit={(swiper) => {
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
				breakpoints={{

					320: {
						slidesPerView: 2,
						spaceBetween: 25,
					},
					420: {
						slidesPerView: 3,
						spaceBetween: 25,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 25,
					},
					1024:{
						slidesPerView: 5,
						spaceBetween: 25,
					},
					1920: {
						slidesPerView: 6,
						spaceBetween: 25
					},
				}}
				modules={[Navigation]}
				className={styles.gallery}
			>
				{items.map((item) => (
					<SwiperSlide key={item.link} className={styles.swiperSlide}>
						<GalleryActorItem key={item.link} item={item} />
					</SwiperSlide>
				))}
				<div className={styles.galleryNavigation}>
					<button ref={prevRef} className={styles.buttonPrev} aria-label='Предыдущий слайд'><MaterialIcon name='MdChevronLeft'/></button>
					<button ref={nextRef} className={styles.buttonNext} aria-label='Следующий слайд'><MaterialIcon name='MdChevronRight' /></button>
				</div>
			</Swiper>

		</>
	)
}

export default GalleryActor