import { FC } from "react"
import styles from './form.module.scss'
import { IButton } from "./form.interface"
import cn from 'classnames'


const Button:FC<IButton> = ({children, className, ...rest}) => {
  return (
	 <button className={cn(styles.button, className)} {...rest}>{children}</button>
  )
}

export default Button


// {cn(styles.button, className)}