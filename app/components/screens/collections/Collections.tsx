import { IGenre } from '@/shared/interfaces/movie.types'
import styles from './Collections.module.scss'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import Heading from '@/components/ui/heading/Heading'
import Description from '@/components/ui/heading/Description'
import TestItem from './CollectionItem'

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