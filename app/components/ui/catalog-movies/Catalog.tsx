import { FC } from 'react'
import styles from './Catalog.module.scss'
import { ICatalog } from './catalog.interface'
import Heading from '../heading/Heading'
import Description from '../heading/Description'
import GalleryItem from '../gallery/GalleryItem'
import Meta from '../../../utils/meta/Meta'
import { getMovieUrl } from '../../../config/url.config'




const Catalog: FC<ICatalog> = ({ movies, title, description }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			{description && <Description text={description} className={styles.description} />}


			<section className={styles.container}>
				{movies.map(movie =>
					<GalleryItem key={movie._id} item={{
						name: movie.title,
						posterPath: movie.bigPoster,
						link: getMovieUrl
						(movie.slug),
						rating: movie.rating,
						description: movie.description,
						series: movie.movieType === 'tv-series',
						movie: movie.movieType === 'movie',
						catroons: movie.movieType === 'cartoons',
						content: {
							title: movie.title,
							year: movie.parameters.year,
							duration: movie.parameters.duration,
							country: movie.parameters.country,
							ratingKinoPoisk: movie.ratingKinoPoisk
						}
					}} variant='horizontal' />
				)}
			</section>
		</Meta>
	)
}

export default Catalog