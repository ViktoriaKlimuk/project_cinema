
import { FC } from 'react'
import { useQuery } from 'react-query'
import styles from '../Admin.module.scss';
import cn from 'classnames'
import Image from 'next/image';
import { MovieService } from '../../../../../services/movie.service';
import { IMovie } from '../../../../../shared/interfaces/movie.types';
import SubHeading from '../../../../ui/heading/SubHeading';
import SkeletonLoader from '../../../../ui/skeleton-loader/SkeletonLoader';

const PopularMovie: FC = () => {
	const { isLoading, data: movie } = useQuery(
		'Most popular movie in admin',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data): IMovie => data[0],
		}
	)
	return (
		<div className={cn(styles.block, styles.popular)}>
			<SubHeading title='Самый популярный фильм:' />
			{isLoading ? <SkeletonLoader style={{ height: '48' }} /> : movie &&
				<div className={styles.movieInfo}>
					<Image src={movie.poster} alt={movie.title} className={styles.bigposter} />
					<h3>Просмотрен {movie.countOpened} разa</h3>
				</div>
			}
		</div>
	)
}

export default PopularMovie