import { FC } from "react"
import { IMovie } from "shared/interfaces/movie.types"
import styles from './Movies.module.scss'
import Link from "next/link"
import { getGenreUrl, getMovieUrl } from "config/url.config"
import { getGenresListEach } from "utils/movie/getGenresList"
import Image from "next/image"

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
					<Image src={movie.poster} draggable={false} alt={movie.title} className={styles.poster} layout="fill"/>
			</Link>
			<div className={styles.info}>
				<div className={styles.head}>
					<Link href={getMovieUrl(movie.slug)}>
							<h2 className={styles.movie_title}>{movie.title}</h2>
					</Link>
					<div className={styles.genres}>
						{movie.genres.map((genre, idx) => (
							<Link key={genre._id} href={getGenreUrl(genre.slug)}>
									{getGenresListEach(idx, movie.genres.length, genre.name)}
							</Link>))}
					</div>
				</div>
				<div className={styles.rating}>
					<Image src='/icons/starRating.svg' alt="Рейтинг" draggable={false}  layout="fill"/>
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem