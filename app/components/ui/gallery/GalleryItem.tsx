import { FC } from 'react'
import { IGalleryItemProps } from './gallery.interface'
import Link from 'next/link'
import styles from './Gallery.module.scss'
import cn from 'classnames'
import Image from 'next/image'



const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link href={item.link} >

			<div className={cn(styles.cardContainer, {
				[styles.withText]: item.content,
				[styles.horizontal]: variant === 'horizontal',
				[styles.filmDetails]: variant === 'filmDetails',
				[styles.mainPage]: variant === 'mainPage',
			})}>
				<article className={styles.movieCard}>
					<Image src={item.posterPath} 
						 alt={item.name} 
						 draggable={false} className={styles.mainImg} 
						 layout="fill"/>
					{item.movieType === 'tv-series' &&
						<Image src='/seriesLogo.svg' className={styles.seriesLogo} alt="Иконка сериала" layout="fill"/>
					}
					{item.movieType === 'cartoons' &&
						<Image src='/cartoonsLogo.svg' className={styles.cartoonsLogo} alt="Иконка мультфильма" layout="fill"/>
					}
					{item.content && (
						<div className={styles.content}>
							<h1>{item.content?.title}</h1>
							<div className={styles.infos}>
								<Image src={'/kinopoiskRating.svg'} width={25} height={25} draggable={false} alt='Рейтинг фильма' />
								{item.content?.ratingKinoPoisk.toFixed(1)}
								<span>·&nbsp;{item.content?.year}·&nbsp;{item.content?.country}·&nbsp;{item.content?.duration} мин.</span>
							</div>

							<p className={styles.synopsis}>
								{item.description}
							</p>
						</div>
					)}
					{item.param && (
						<div className={styles.content}>
							<h3 className={styles.title}>{item.param.title}</h3>
							<h4 className={styles.subTitle}>{item.param.subTitle}</h4>
						</div>
					)}
				</article>

			</div>
		</Link>

		// <div className={styles.card}>
		// 	<Link href={item.link}>
		// 		<a className={cn(styles.item, {
		// 			[styles.withText]: item.content,
		// 			[styles.horizontal]: variant === 'horizontal',
		// 			[styles.vertical]: variant === 'vertical',
		// 		})}>

		// 			<div className={styles.itemContainer}>
		// 				<img src={item.posterPath} alt={item.name} draggable={false} />
		// 				{item.content && (
		// 					<div className={styles.content}>
		// 						<h3 className={styles.title}>{item.content.title}</h3>
		// 						<div className={styles.description}>
		// 							<div className={styles.rating}>
		// 								{item.rating &&
		// 									<>
		// 										<img src="../../../../icons/starRating.svg" alt="" />
		// 										<span>{item.rating.toFixed(1)}</span>
		// 									</>
		// 								}
		// 							</div>
		// 							<div>{item.content.country}</div>
		// 							<div>{item.content.duration} мин.</div>
		// 							<span className={styles.year}>{item.content.year}</span>

		// 						</div>

		// 					</div>
		// 				)}
		// 				{item.param && (
		// 					<div className={styles.content}>
		// 						<h3 className={styles.title}>{item.param.title}</h3>
		// 						<h4 className={styles.subTitle}>{item.param.subTitle}</h4>
		// 					</div>
		// 				)}

		// 			</div>
		// 		</a>
		// 	</Link>

		// 	<Link href={item.link} c>
		// 		<a className={styles.descContainer}>
		// 			<p>{item.name}</p>
		// 			{item.content?.year && <span>( {item.content.year} )</span>}
		// 		</a>
		// 	</Link>
		// </div>
	)
}

export default GalleryItem