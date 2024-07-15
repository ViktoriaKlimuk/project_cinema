import { IMovie } from "../../../shared/interfaces/movie.types"


export interface ICatalog {
	title: string
	description?:string
	movies:IMovie[]
}