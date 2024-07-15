import { FC, Fragment } from 'react'
import { IContentList } from '../content.interface'
import styles from './ContentList.module.scss'
import Link from 'next/link'
import cn from 'classnames'
import Image from 'next/image'

const ContentList: FC<IContentList> = ({ links, name, variant }) => {
	return (
		<div className={cn(styles.list, {
			[styles.actors]: variant === 'actors',
			[styles.genres]: variant === 'genres',
		})}>
			<p> <span>{name}</span></p>
			<div>
				{links.map((link, index) => <div key={index} className={styles.actor}>
					{link.photo && <Image src={link.photo} alt="" layout='fill'/>}
					<Link href={link.link}>
						{link.title}
					</Link>
					{index + 1 !== links.length && variant !== 'actors' ? ', ' : ''}
				</div>)}
			</div>

		</div>
	)
}

export default ContentList