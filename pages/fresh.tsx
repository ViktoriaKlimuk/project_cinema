import Catalog from '@/components/ui/catalog-movies/Catalog'
import { MovieService } from '@/services/movie.service'
import { IMovie } from '@/shared/interfaces/movie.types'
import { GetStaticProps, NextPage } from 'next'

const FreshPage:NextPage<{movies: IMovie[]}> = ({movies}) => {
  return (
	 <Catalog movies={movies || []} title='Новинки' description='Новинки фильмов'/>
  )
}


export const getStaticProps:GetStaticProps = async () => {
	try {
		const {data:movies} = await MovieService.getAll()
		return {
			props: {
				movies,
			},
			revalidate: 100,
		}
	} catch (error) {
		return {
			notFound: true
		}
	}
}

export default FreshPage