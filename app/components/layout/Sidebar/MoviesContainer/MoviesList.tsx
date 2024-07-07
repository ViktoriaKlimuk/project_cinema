import { FC } from "react"
import { IMovieList } from "./movie-list.interface"
import styles from './Movies.module.scss';
import MovieItem from "./MovieItem";
import Link from "next/link";

const MoviesList: FC<IMovieList> = ({ link, title, movies }) => {
	return (
		<div className={styles.list}>
			<h2 className={styles.heading}>{title}</h2>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link}>
				<a className={styles.button}>{link === '/trending' ? 'Все популярные фильмы...' : 'Все избранные...'}</a>
			</Link>
		</div>

	)
}

export default MoviesList