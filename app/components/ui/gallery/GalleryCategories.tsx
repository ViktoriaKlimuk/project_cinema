
import Image from 'next/image';
import styles from './GalleryCategories.module.scss';
import Link from 'next/link';

const GalleryCategories = () => {
	return (
			<div className={styles.wrapper}>
				<Link href={'/movies'}>
					<div className={styles.card}>
						<Image src={'/icons/movieIcon.svg'} width={25} height={25} draggable={false} alt=''/>
						<p>Фильмы</p>
					</div>
				</Link>
				<Link href={'/series'}>
					<div className={styles.card}>
						<Image src={'/icons/serialIcon.svg'} width={25} height={25} draggable={false} alt=''/>
						<p>Сериалы</p>
					</div>
				</Link>
				<Link href={'/cartoons'}>
					<div className={styles.card}>
						<Image src={'/icons/cartoonIcon.svg'} width={25} height={25} draggable={false} alt=''/>
						<p>Мультфильмы</p>
					</div>
				</Link>
				<Link href={'/movies'}>
					<div className={styles.card}>
						<Image 
						src={'/icons/topIcon.svg'} 
						width={25} 
						height={25} 
						draggable={false}
						alt='' />
						<p>Топ-100</p>
					</div>
				</Link>
				<Link href={'/genres'}>
					<div className={styles.card}>
						<Image src={'/icons/categoryIcon.svg'} width={25} height={25} draggable={false} alt=''/>
						<p>Жанры</p>
					</div>
				</Link>
				<Link href={'/trending'}>
					<div className={styles.card}>
						<Image src={'/icons/movieIcon.svg'} width={25} height={25} draggable={false} alt=''/>
						<p>Сейчас смотрят</p>
					</div>
				</Link>
				<Link href={'/fresh'}>
					<div className={styles.card}>
						<Image src={'/icons/freshIcon.svg'} width={25} height={25} draggable={false} alt=''/>
						<p>Новинки</p>
					</div>
				</Link>
				<Link href={'/favorites'}>
					<div className={styles.card}>
						<Image src={'/icons/favoriteIcon.svg'} width={25} height={25} draggable={false} alt=''/>
						<p>Избранное</p>
					</div>
				</Link>
				<Link href={'/movies'}>
					<div className={styles.card}>
						<Image src={'/icons/choiseIcon.svg'} width={25} height={25} draggable={false} alt=''/>
						<p>Подборки</p>
					</div>
				</Link>
			</div>
	)
}

export default GalleryCategories