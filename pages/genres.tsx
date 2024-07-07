import { GetStaticProps, NextPage } from 'next'
import { GenreService } from '@/services/genre.service'
import { IGenre } from '@/shared/interfaces/movie.types'
import Collections from '@/components/screens/collections/Collections'


const GenresPage: NextPage<{ genres: IGenre[] }> = ({ genres }) => {
	return (
		<Collections genres={genres || []} title='Жанры' description='Сейчас смотрят' />

	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: genres } = await GenreService.getAll()
		return {
			props: { genres },
			revalidate: 100,
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			// props: {},
			notFound: true,
		}
	}
}

export default GenresPage
