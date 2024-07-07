import SwiperSlider from '@/components/ui/SwiperSlider/SwiperSlider'
import Catalog from '@/components/ui/catalog-movies/Catalog'
import Pagination from '@/components/ui/pagination/Pagination'
import { MovieService } from '@/services/movie.service'
import { IMovie } from '@/shared/interfaces/movie.types'
import { GetStaticProps, NextPage } from 'next'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({movies} ) => {

// 	fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/5234099', {
// 		method: 'GET',
// 		headers: {
// 			 'X-API-KEY': 'a5bdd094-40d7-4f9c-b23b-d2a4cfc5042c',
// 			 'Content-Type': 'application/json',
// 		},
//   })
// 		.then(res => res.json())
// 		.then(json => console.log(json))
// 		.catch(err => console.log(err))                          




	return (
		<>
			<Catalog movies={movies || []} title='Сейчас смотрят' description='Сейчас смотрят' />
		</>
	)
}


export const getStaticProps: GetStaticProps = async () => {
	try {
		const movies = await MovieService.getMostPopularMovies()
		return {
			props: {
				movies
			},
			revalidate: 100,
		}
	} catch (error) {
		return {
			notFound: true
		}
	}
}

export default TrendingPage