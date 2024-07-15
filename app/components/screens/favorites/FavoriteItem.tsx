
import { FC } from 'react'
import styles from './Favorite.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '../../../hooks/useAuth'
import { IMovie } from '../../../shared/interfaces/movie.types'
import { getMovieUrl } from '../../../config/url.config'
import FavoriteButton from '../../ui/favoriteButton/FavoriteButton'

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie}) => {
	const {user} = useAuth()
	return (
		<div className={styles.itemWrapper}>
			<Link href={getMovieUrl(movie.slug)}>
				<div className={styles.item}>
					<Image
						alt={movie.title}
						src={movie.poster}
						draggable={false}
						layout='fill'
					/>
					<h4 className={styles.title}>{movie.title}</h4>
				</div>
			</Link>
			{user && <FavoriteButton movieId={movie._id} variant='card'/>}
		</div>
	)
}

export default FavoriteItem