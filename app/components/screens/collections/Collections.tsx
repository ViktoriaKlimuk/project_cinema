
import styles from './Collections.module.scss'
import { FC } from 'react'
import TestItem from './CollectionItem'
import { IGenre } from '../../../shared/interfaces/movie.types'
import Meta from '../../../utils/meta/Meta'
import Heading from '../../ui/heading/Heading'
import Description from '../../ui/heading/Description'

const title = 'Discovery'
const description = 'In this section you will find all genres on our site'


const Collections: FC<{ genres: IGenre[] }> = ({ genres, title, description }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			<Description text={description} className={styles.description} />

			<section className={styles.container}>
				{genres.map((genre) => (
					<TestItem key={genre._id} genre={genre}/>
				))}
			</section>
		</Meta>
	)
}

export default Collections