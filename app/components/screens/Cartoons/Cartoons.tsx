
import Meta from '../../../utils/meta/Meta'
import { ICatalog } from '../../ui/catalog-movies/catalog.interface'
import styles from '../../ui/catalog-movies/Catalog.module.scss'
import { FC } from "react"
import Heading from '../../ui/heading/Heading'
import Description from '../../ui/heading/Description'
import GalleryItem from '../../ui/gallery/GalleryItem'
import { getMovieUrl } from '../../../config/url.config'



const Cartoons: FC<ICatalog> = ({ movies, title, description }) => {

	const cartoons = movies.filter(movie => movie.movieType === 'cartoon')

	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			{description && <Description text={description} className={styles.description} />}


			<section className={styles.container}>
				{cartoons.map(movie =>
					<GalleryItem key={movie._id} item={{
						name: movie.title,
						posterPath: movie.bigPoster,
						link: getMovieUrl(movie.slug),
						rating: movie.rating,
						description: movie.description,
						movieType:movie.movieType,
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

export default Cartoons