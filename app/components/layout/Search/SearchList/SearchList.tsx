import { FC } from "react"
import styles from './SearchList.module.scss'
import { IMovie } from "shared/interfaces/movie.types"
import Link from "next/link"
import Image from "next/image"

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.movies_list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link key={movie._id} href={`/movie/${movie.slug}`}>
						<div className={styles.searchInfo}>
							<div className={styles.poster_info}>
								<Image src={movie.poster} alt={movie.title} draggable={false} className={styles.poster} layout="fill"/>
								<div className={styles.rating}>
									<Image src={'/starRating.svg'} width={35} height={35} draggable={false} alt='Рейтинг фильма от нашего сайта' />
									<span>{movie.rating.toFixed(1)}</span>
								</div>
							</div>
							<div className={styles.searchTitle}>
								<h4>{movie.title}</h4>
								<p>Год выпуска: {movie.parameters.year}</p>
							</div>
							<div>
								<p>Продолжительность: {movie.parameters.duration}м</p>
								<p>Страна: {movie.parameters.country}</p>
							</div>
						</div>
					</Link>
				))
			) : (<div className={styles.notFound}>Фильмы не найдены</div>)}
		</div>
	)
}

export default SearchList