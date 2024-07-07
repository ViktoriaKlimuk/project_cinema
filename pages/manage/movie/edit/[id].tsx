
import MovieEdit from "@/components/screens/admin/movies/MovieEdit"
import MovieEditTest from "@/components/screens/admin/movies/MovieEditTest"
import { NextPageAuth } from "@/shared/interfaces/auth.types"

const MovieEditPage:NextPageAuth = () => {
  return (
	// <MovieEdit />
	<MovieEditTest />
  )
}
MovieEditPage.isOnlyAdmin = true

export default MovieEditPage