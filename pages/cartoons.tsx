import Cartoons from '@/components/screens/Cartoons/Cartoons'
import { MovieService } from '@/services/movie.service'
import { IMovie } from '@/shared/interfaces/movie.types'
import { GetStaticProps, NextPage } from 'next'


const CartoonsPage:NextPage<{movies: IMovie[]}> = ({movies}) => {
	return (
	  <Cartoons movies={movies || []} title='Мультфильмы' description='Новинки Мультфильмов'/>
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
 
 export default CartoonsPage