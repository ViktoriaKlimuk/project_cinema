import { FC } from 'react'
import styles from './SlugField.module.scss'
import { FieldError, UseFormRegister } from 'react-hook-form'
import Field from '../Field'

interface ISlugField {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
}
const SlugField: FC<ISlugField> = ({ generate, register, error }) => {
	return (
		<div className={styles.wrapper}>
			<Field {...register('slug', {
				required: 'Slug is required!',
			})}
				placeholder='Slug'
				error={error}
			/>
			<button onClick={generate}>Сгенерировать</button>
		</div>
	)
}

export default SlugField