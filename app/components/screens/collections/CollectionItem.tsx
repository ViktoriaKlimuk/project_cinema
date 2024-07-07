import Link from 'next/link'
import { FC } from 'react'
import styles from './Collections.module.scss'
import { getGenreUrl } from 'config/url.config'
import { IGenre } from '@/shared/interfaces/movie.types'



const CollectionItem: FC<{ genre: IGenre }> = ({ genre }) => {
	return (
		<Link href={genre.link || getGenreUrl(genre.slug)} >
			<a className={styles.card} >
				<h3>{genre.name}</h3>
			</a>
		</Link>



	)
}

export default CollectionItem