import { FC, Fragment } from 'react'
import { IContentList } from '../content.interface'
import styles from './ContentList.module.scss'
import Link from 'next/link'
import cn from 'classnames'

const ContentList: FC<IContentList> = ({ links, name, variant }) => {
	return (
		<div className={cn(styles.list, {
			[styles.actors]: variant === 'actors',
			[styles.genres]: variant === 'genres',
		})}>
			<p> <span>{name}</span></p>
			<div>
				{links.map((link, index) => <div key={index} className={styles.actor}>
					{link.photo && <img src={link.photo} alt="" />}
					<Link href={link.link}>
						<a>{link.title}</a>
					</Link>
					{index + 1 !== links.length && variant !== 'actors' ? ', ' : ''}
				</div>)}
			</div>

		</div>
	)
}

export default ContentList