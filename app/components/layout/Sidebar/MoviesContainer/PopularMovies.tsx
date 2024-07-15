
import { FC } from "react"
import { useQuery } from "react-query"
import styles from './Movies.module.scss'
import MoviesList from "./MoviesList"
import { MovieService } from "../../../../services/movie.service"
import SkeletonLoader from "../../../ui/skeleton-loader/SkeletonLoader"

const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery('Popular movies in sidebar', () => MovieService.getMostPopularMovies())

	return isLoading ? (
		<div className={styles.skeleton_wrapper}>
			<SkeletonLoader count={2} className={styles.skeleton} />
		</div>
	) : (
		<MoviesList
			link='/trending'
			movies={popularMovies?.slice(0,3) || []}
			title='Популярные фильмы' />
	)
}

export default PopularMovies