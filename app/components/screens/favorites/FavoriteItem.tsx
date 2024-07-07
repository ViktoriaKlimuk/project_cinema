import { IMovie } from '@/shared/interfaces/movie.types'
import { FC } from 'react'
import styles from './Favorite.module.scss'
import FavoriteButton from '@/components/ui/favoriteButton/FavoriteButton'
import Link from 'next/link'
import { getMovieUrl } from 'config/url.config'
import { useAuth } from '@/hooks/useAuth'

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie}) => {
	const {user} = useAuth()
	return (
		<div className={styles.itemWrapper}>
			<Link href={getMovieUrl(movie.slug)}>
				<a className={styles.item}>
					<img
						alt={movie.title}
						src={movie.poster}
						draggable={false}
					/>
					<h4 className={styles.title}>{movie.title}</h4>
				</a>
			</Link>
			{user && <FavoriteButton movieId={movie._id} variant='card'/>}
		</div>
	)
}

export default FavoriteItem