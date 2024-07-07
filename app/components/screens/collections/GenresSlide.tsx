import { FC, useRef } from 'react'
import styles from './Collections.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IGenre } from '@/shared/interfaces/movie.types';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import CollectionItem from './CollectionItem';

const GenresSlide: FC<{ items: IGenre[] }> = ({ items }) => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<>
			<Swiper
				slidesPerView={7}
				spaceBetween={'1%'}
				onInit={(swiper) => {
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
				breakpoints={{
					320: {
						slidesPerView: 3,
						spaceBetween: 25
					},
					1400: {
						slidesPerView: 5,
						spaceBetween: 25
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
					<SwiperSlide key={item._id} className={styles.swiperSlide}>
						<section className={styles.container}>
							<CollectionItem key={item.name} genre={item} />
						</section>
					</SwiperSlide>
				))}

				<div className={styles.galleryNavigation}>
					<button ref={prevRef} className={styles.buttonPrev} aria-label='Предыдущий слайд'><MaterialIcon name='MdChevronLeft' /></button>
					<button ref={nextRef} className={styles.buttonNext} aria-label='Следующий слайд'><MaterialIcon name='MdChevronRight' /></button>
				</div>
			</Swiper>

		</>
	)
}

export default GenresSlide