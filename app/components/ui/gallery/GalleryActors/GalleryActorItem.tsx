import { FC } from 'react'
import { IGalleryItemProps } from '../gallery.interface'
import Link from 'next/link'
import styles from './GalleryActors.module.scss'
import Image from 'next/image'


const GalleryActorItem: FC<IGalleryItemProps> = ({ item }) => {
	return (
		<Link href={item.link}>
			<div className={styles.container}>
				<div className={styles.card}>
				<Image src={item.posterPath}  width={300} height={400} alt={item.name} />
					<div className={styles.description}>
						<h2 className={styles.title}>{item.param?.title}</h2>
						<h3 className={styles.subTitle}>{item.param?.subTitle}</h3>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default GalleryActorItem

