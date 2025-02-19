import { forwardRef } from "react";
import { IField } from "./form.interface";
import styles from './form.module.scss';
import cn from 'classnames'

const Field = forwardRef<HTMLInputElement, IField>( ({placeholder, error, type="text", style, ...rest}, ref) => {
  return (
	 <div className={cn(styles.common, styles.checkbox)} style={style}>
		<label>
			<input type={type} ref={ref} {...rest} placeholder={placeholder} />
		</label>
		{error && <div className={styles.error}>{error.message}</div>}
	 </div>
  )
})

Field.displayName = 'Field'
export default Field