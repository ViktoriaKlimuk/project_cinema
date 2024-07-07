import { IGalleryItem } from "@/components/ui/gallery/gallery.interface";
import { ISlide } from "@/components/ui/slider/slider.interface";
import { IGenre } from "@/shared/interfaces/movie.types";

export interface IHome {
	slides: ISlide[]
	trendingMovies:IGalleryItem[]
	actors: IGalleryItem[]
	genres: IGenre[]
	freshMovies:IGalleryItem[]
}