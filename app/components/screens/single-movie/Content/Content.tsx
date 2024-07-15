import { FC } from 'react'
import styles from './Content.module.scss'
import ContentList from './ContentList/ContentList'
import Image from 'next/image'
import { IMovie } from '../../../../shared/interfaces/movie.types'
import { useAuth } from '../../../../hooks/useAuth'
import { getGenreUrl } from '../../../../config/url.config'
import FavoriteButton from '../../../ui/favoriteButton/FavoriteButton'

const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	const { user } = useAuth()

	return (
		<div className={styles.content}>
			<div className={styles.title}>
				{movie.title && <h1>{movie.title}</h1>}
				<div className={styles.details}>
					<p><span>Дата выхода: </span>{movie.parameters.year} год</p>
					<p><span>Страна: </span> {movie.parameters.country}</p>
					<p><span>Продолжительность: </span> {movie.parameters.duration} мин.</p>
					<ContentList
						name="Жанр:"
						links={movie.genres.slice(0.3).map(g => ({
							_id: g._id,
							link: getGenreUrl(g.slug),
							title: g.name
						}))} />
				</div>
			</div>
			<section className={styles.ratingContainer}>
				<div>
					<Image src={'/starRating.svg'} width={35} height={35} draggable={false} alt='Рейтинг фильма от нашего сайта' />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
				{user && <FavoriteButton movieId={movie._id} variant='banner' />}
			</section>

		</div>
	)
}

export default Content