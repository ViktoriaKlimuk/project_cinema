
import Image from 'next/image';
import styles from './GalleryCategories.module.scss';
import Link from 'next/link';

const GalleryCategories = () => {
	return (
			<div className={styles.wrapper}>
				<Link href={'/movies'}>
					<a className={styles.card}>
						<Image src={'/icons/movieIcon.svg'} width={25} height={25} draggable={false} />
						<p>Фильмы</p>
					</a>
				</Link>
				<Link href={'/series'}>
					<a className={styles.card}>
						<Image src={'/icons/serialIcon.svg'} width={25} height={25} draggable={false} />
						<p>Сериалы</p>
					</a>
				</Link>
				<Link href={'/cartoons'}>
					<a className={styles.card}>
						<Image src={'/icons/cartoonIcon.svg'} width={25} height={25} draggable={false} />
						<p>Мультфильмы</p>
					</a>
				</Link>
				<Link href={'/movies'}>
					<a className={styles.card}>
						<Image src={'/icons/topIcon.svg'} width={25} height={25} draggable={false} />
						<p>Топ-100</p>
					</a>
				</Link>
				<Link href={'/genres'}>
					<a className={styles.card}>
						<Image src={'/icons/categoryIcon.svg'} width={25} height={25} draggable={false} />
						<p>Жанры</p>
					</a>
				</Link>
				<Link href={'/trending'}>
					<a className={styles.card}>
						<Image src={'/icons/movieIcon.svg'} width={25} height={25} draggable={false} />
						<p>Сейчас смотрят</p>
					</a>
				</Link>
				<Link href={'/fresh'}>
					<a className={styles.card}>
						<Image src={'/icons/freshIcon.svg'} width={25} height={25} draggable={false} />
						<p>Новинки</p>
					</a>
				</Link>
				<Link href={'/favorites'}>
					<a className={styles.card}>
						<Image src={'/icons/favoriteIcon.svg'} width={25} height={25} draggable={false} />
						<p>Избранное</p>
					</a>
				</Link>
				<Link href={'/movies'}>
					<a className={styles.card}>
						<Image src={'/icons/choiseIcon.svg'} width={25} height={25} draggable={false} />
						<p>Подборки</p>
					</a>
				</Link>
			</div>
	)
}

export default GalleryCategories