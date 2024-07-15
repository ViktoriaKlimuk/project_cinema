
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Error404 from '../404'
import { IMovie } from '../../app/shared/interfaces/movie.types'
import { IGalleryItem } from '../../app/components/ui/gallery/gallery.interface'
import SingleMovie from '../../app/components/screens/single-movie/SingleMovie'
import { MovieService } from '../../app/services/movie.service'
import { getMovieUrl } from '../../app/config/url.config'


export interface IMoviePage {
	movie: IMovie 
	similarMovies: IGalleryItem[]
}

const MoviePage: NextPage<IMoviePage> = ({ movie, similarMovies }) => {
	return movie ? (
		<SingleMovie movie={movie} similarMovies={similarMovies || []} />
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const paths = movies.map((movie) => ({
			params: { slug: movie.slug },
		}))

		return { 
			paths,
			fallback: 'blocking',
		}
	} catch {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await MovieService.getBySlug(String(params?.slug))

		const {data: dataSimilarMovies} = await MovieService.getByGenres(movie.genres.map((g) => g._id))

		const similarMovies: IGalleryItem[] = dataSimilarMovies.filter((m) => m._id !== movie._id).map((m) => ({
			name: m.title,
			posterPath: m.poster,
			link: getMovieUrl(m.slug),
			description: m.description,
			series:m.movieType === 'tv-series',
			movie:m.movieType === 'movie',
			catroons:m.movieType === 'cartoons',
			content: {
				title: m.title,
				year: m.parameters.year,
				duration: m.parameters.duration,
				country: m.parameters.country,
				ratingKinoPoisk: m.ratingKinoPoisk
			},
		}))

		return {
			props:{
				movie,
				similarMovies,
			},
			revalidate: 100,
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default MoviePage