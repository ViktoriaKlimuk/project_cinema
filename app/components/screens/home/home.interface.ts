import { IGenre } from "../../../shared/interfaces/movie.types"
import { IGalleryItem } from "../../ui/gallery/gallery.interface"
import { ISlide } from "../../ui/slider/slider.interface"


export interface IHome {
	slides: ISlide[]
	trendingMovies:IGalleryItem[]
	actors: IGalleryItem[]
	genres: IGenre[]
	freshMovies:IGalleryItem[]
}