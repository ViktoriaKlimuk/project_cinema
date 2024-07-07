import { FC } from 'react'
import styles from './Slider.module.scss'
import { ISlide } from './slider.interface'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Button from '../form-elements/Button'


export interface ISlideItem {
	slide: ISlide
	buttonTitle?: string
}

const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle = 'Watch' }) => {
	const { push } = useRouter()

	return (
		<div className={styles.slide}>
			{slide.bigPoster && (
				<img
					className={styles.image}
					src={slide.bigPoster}
					alt={slide.title}
					draggable={false}
				/>
			)}
			<div className={styles.content}>
				<div className={styles.heading}>{slide.title}</div>
				<div className={styles.subHeading}>{slide.subTitle}</div>
				<Button className={styles.button} onClick={() => push(slide.link)}>
					{buttonTitle}
				</Button>
			</div>
		</div>
	)
}

export default SlideItem