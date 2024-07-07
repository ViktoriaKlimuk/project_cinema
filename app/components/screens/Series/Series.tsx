import { ICatalog } from "@/components/ui/catalog-movies/catalog.interface"
import GalleryItem from "@/components/ui/gallery/GalleryItem"
import Description from "@/components/ui/heading/Description"
import Heading from "@/components/ui/heading/Heading"
import Meta from "@/utils/meta/Meta"
import { getMovieUrl } from "config/url.config"
import styles from '../../ui/catalog-movies/Catalog.module.scss'
import { FC } from "react"



const Series: FC<ICatalog> = ({ movies, title, description }) => {

	const series = movies.filter(movie => movie.movieType === 'tv-series')

	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			{description && <Description text={description} className={styles.description} />}


			<section className={styles.container}>
				{series.map(movie =>
					<GalleryItem key={movie._id} item={{
						name: movie.title,
						posterPath: movie.poster,
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

export default Series