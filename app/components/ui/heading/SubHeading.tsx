import { FC } from 'react'
import styles from './Heading.module.scss'
import Link from 'next/link'

const SubHeading: FC<{ title: string, link: string }> = ({ title}) => {
	return (
		<h2 className={styles.subheading}>{title}</h2>
	)
}

export default SubHeading