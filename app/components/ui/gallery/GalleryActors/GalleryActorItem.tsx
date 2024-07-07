import { FC } from 'react'
import { IGalleryItemProps } from '../gallery.interface'
import Link from 'next/link'
import styles from './GalleryActors.module.scss'


const GalleryActorItem: FC<IGalleryItemProps> = ({ item }) => {
	return (
		<Link href={item.link}>
			<a className={styles.container}>
				<div className={styles.card}>
					<img src={item.posterPath} alt={item.name} />
					<div className={styles.description}>
						<h2 className={styles.title}>{item.param?.title}</h2>
						<h3 className={styles.subTitle}>{item.param?.subTitle}</h3>
					</div>
				</div>
			</a>
		</Link>
	)
}

export default GalleryActorItem