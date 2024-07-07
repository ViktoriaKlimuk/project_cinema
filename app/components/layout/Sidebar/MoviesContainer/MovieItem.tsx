import { FC } from "react"
import { IMovie } from "shared/interfaces/movie.types"
import styles from './Movies.module.scss'
import Link from "next/link"
import { getGenreUrl, getMovieUrl } from "config/url.config"
import { getGenresListEach } from "utils/movie/getGenresList"

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<a>
					<img src={movie.poster} draggable={false} alt={movie.title} className={styles.poster} />
				</a>
			</Link>
			<div className={styles.info}>
				<div className={styles.head}>
					<Link href={getMovieUrl(movie.slug)}>
						<a>
							<h2 className={styles.movie_title}>{movie.title}</h2>
						</a>
					</Link>
					<div className={styles.genres}>
						{movie.genres.map((genre, idx) => (
							<Link key={genre._id} href={getGenreUrl(genre.slug)}>
								<a>
									{getGenresListEach(idx, movie.genres.length, genre.name)}
								</a>
							</Link>))}
					</div>
				</div>
				<div className={styles.rating}>
					<img src='/icons/starRating.svg' alt="Рейтинг" draggable={false} />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem