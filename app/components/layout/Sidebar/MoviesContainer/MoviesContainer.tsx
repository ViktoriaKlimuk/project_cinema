import dynamic from "next/dynamic"
import PopularMovies from "./PopularMovies"


const DynamicFavoritesMovies = dynamic(() => import('./FavoriteMovies/FavoriteMovies'), {
	ssr:false
})


const MoviesContainer = () => {
	return(
		<>
			<PopularMovies />
			<DynamicFavoritesMovies />
		</>
	)
}

export default MoviesContainer