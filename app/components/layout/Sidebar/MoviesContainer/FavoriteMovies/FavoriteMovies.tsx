import { useFavorites } from "@/components/screens/favorites/useFavorites"
import { useAuth } from "@/hooks/useAuth"
import NotAuthFavorites from "./NotAuthFavorites"
import SkeletonLoader from "@/components/ui/skeleton-loader/SkeletonLoader"
import styles from './FavoriteMovies.module.scss'
import MoviesList from "../MoviesList"

const FavoriteMovies = () => {

	const { favoritesMovies, isLoading } = useFavorites()
	const { user } = useAuth()

	if (!user) return <NotAuthFavorites />

	return isLoading ? (
		<div>
			<SkeletonLoader count={3} className={styles.skeleton} />
		</div >
	) : (
		<MoviesList
		link='/favorites'
		movies={favoritesMovies?.slice(0,3) || []}
		title='Избранные'/>
	)
}

export default FavoriteMovies