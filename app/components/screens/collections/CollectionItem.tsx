import Link from 'next/link'
import { FC } from 'react'
import styles from './Collections.module.scss'
import { IGenre } from '../../../shared/interfaces/movie.types'
import { getGenreUrl } from '../../../config/url.config'



const CollectionItem: FC<{ genre: IGenre }> = ({ genre }) => {
	return (
		<Link href={genre.link || getGenreUrl(genre.slug)} >
			<div className={styles.card} >
				<h3>{genre.name}</h3>
			</div>
		</Link>



	)
}

export default CollectionItem