import { FC } from 'react'
import { useFavorites } from './useFavorites'
import styles from './Favorite.module.scss'
import FavoriteItem from './FavoriteItem'
import { useAuth } from '../../../hooks/useAuth'
import Meta from '../../../utils/meta/Meta'
import Heading from '../../ui/heading/Heading'
import SkeletonLoader from '../../ui/skeleton-loader/SkeletonLoader'

const Favorites: FC = () => {
	const { favoritesMovies, isLoading, } = useFavorites()
	const {user} = useAuth()

	if(!user) return null
	return (
		<Meta title='Избранные'>
			<Heading title='Избранные' />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favoritesMovies?.map((movie) => (
						<FavoriteItem
							key={movie._id}
							movie={movie}
						/>
					))
				)}
			</section>
		</Meta>
	)
}

export default Favorites