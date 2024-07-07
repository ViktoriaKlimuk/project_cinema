
import MovieList from "@/components/screens/admin/movies/MovieList"
import { NextPageAuth } from "@/shared/interfaces/auth.types"

const MovieListPage:NextPageAuth = () => {
  return (
	 <MovieList />
  )
}
MovieListPage.isOnlyAdmin = true

export default MovieListPage