import { IMovie } from "shared/interfaces/movie.types"

export interface IMovieList {
	title:string
	link:string
	movies:IMovie[]
}