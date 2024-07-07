import { FC } from "react"
import parse from 'html-react-parser'
import cn from 'classnames'
import styles from './Heading.module.scss'

const Description:FC<{text:string; className?: string}> = ({
	text,
	className = '',
}) => {
  return (
	<div className={cn(styles.desc, className )}>
		{parse(text)}
	</div>
  )
}

export default Description