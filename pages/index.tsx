import type { GetStaticProps, NextPage } from "next";
import Home from "../app/components/screens/home/Home";
import { MovieService } from "../app/services/movie.service";
import { ISlide } from "../app/components/ui/slider/slider.interface";
import { getActorUrl, getGenreUrl, getMovieUrl } from "../app/config/url.config";
import { getGenresList } from "../app/utils/movie/getGenresList";
import { ActorService } from "../app/services/actor.service";
import { IGalleryItem } from "../app/components/ui/gallery/gallery.interface";
import { GenreService } from "../app/services/genre.service";
import { IGenre } from "../app/shared/interfaces/movie.types";
import { IHome } from "../app/components/screens/home/home.interface";


const HomePage: NextPage<any> = ({ slides, trendingMovies, actors, genres, freshMovies }) => {
	return <Home slides={slides} actors={actors} trendingMovies={trendingMovies} freshMovies={freshMovies} genres={genres}/>
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const slides: ISlide[] = movies.slice(0, 5).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			bigPoster: m.bigPoster,
			subTitle: getGenresList(m.genres),
			title: m.title,
			//itd
		}))



		const { data: dataActors } = await ActorService.getAll()
		const actors: IGalleryItem[] = dataActors.slice(0, 10).map(actor => ({
			name: actor.name,
			posterPath: actor.photo,
			link: getActorUrl(actor.slug),
			param: {
				title: actor.name,
				subTitle: `Фильмов: ${actor.countMovies}`,
			}
		}))


		const { data: dataGenres } = await GenreService.getAll()
		const genres: IGenre[] = dataGenres.slice(0, 10).map(genre => ({
			_id:genre._id,
			name: genre.name,
			link: getGenreUrl(genre.slug),
		}))



		const dataTrendingMovies = await MovieService.getMostPopularMovies()
		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 20)
			.map((movie) => ({
				name: movie.title,
				posterPath: movie.poster,
				link: getMovieUrl(movie.slug),
				description: movie.description,
				series:movie.movieType === 'tv-series',
				movie:movie.movieType === 'movie',
				catroons:movie.movieType === 'cartoons',
				content: {
					title: movie.title,
					year: movie.parameters.year,
					duration: movie.parameters.duration,
					country: movie.parameters.country,
					ratingKinoPoisk: movie.ratingKinoPoisk
				},
			}))

			const {data: dataFreshMovies} = await MovieService.getAll()
			const freshMovies: IGalleryItem[] = dataFreshMovies
				.slice(0, 20)
				.map((movie) => ({
					name: movie.title,
					posterPath: movie.poster,
					link: getMovieUrl(movie.slug),
					description: movie.description,
					series:movie.movieType === 'tv-series',
					movie:movie.movieType === 'movie',
					catroons:movie.movieType === 'cartoons',
					content: {
						title: movie.title,
						year: movie.parameters.year,
						duration: movie.parameters.duration,
						country: movie.parameters.country,
						ratingKinoPoisk: movie.ratingKinoPoisk
					},
				}))



		return {
			props: {
				slides,
				actors,
				trendingMovies,
				genres,
				freshMovies
			} as IHome,
			revalidate: 100,
		}

	} catch (error) {
		return {
			props: {
				slides: [],
				actors: [],
				trendingMovies: [],
				genres:[],
				freshMovies:[]
			},
		}
	}
}




export default HomePage