import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IGenreEditInput } from './genre-edit.interface'
import { useGenreEdit } from './useGenreEdit'
import AdminNavigation from '../AdminNavigation/AdminNavigation'
import styles from '../../../ui/form-elements/admin-from.module.scss'
import { stripHtml } from 'string-strip-html'
import dynamic from 'next/dynamic'
import Meta from '../../../../utils/meta/Meta'
import Heading from '../../../ui/heading/Heading'
import SkeletonLoader from '../../../ui/skeleton-loader/SkeletonLoader'
import Field from '../../../ui/form-elements/Field'
import SlugField from '../../../ui/form-elements/SlugField/SlugField'
import generateSlug from '../../../../utils/string/generateSlug'
import Button from '../../../ui/form-elements/Button'


const DynamicTextEditor = dynamic(() => import('../../../ui/form-elements/TextEditor'), {
	ssr: false,
})
const GenreEdit: FC = () => {
	const { handleSubmit, register, formState: { errors }, setValue, getValues, control } = useForm<IGenreEditInput>({
		mode: "onChange",
	})

	const { isLoading, onSubmit } = useGenreEdit(setValue)

	return (
		<Meta title='Добавление категорий'>
			<AdminNavigation />
			<Heading title='Добавить категорию' />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (<SkeletonLoader count={3} />)
					: (<>
						<div className={styles.formWrapper}>
							<Field {...register('name', {
								required: 'Name is required!',
							})}
								placeholder='Name'
								error={errors.name}
								className={styles.input}
							/>

							<div className={styles.input}>
								<SlugField
									generate={() =>
										setValue('slug', generateSlug (getValues('name')))
									}
									register={register}
									error={errors.slug}
								/>
							</div>
						</div>
						
						<Controller
							control={control}
							name='description'
							defaultValue=''
							render={({
								field: {
									value, onChange
								},
								fieldState: { error }
							}) => (
								<DynamicTextEditor
									onChange={onChange}
									value={value}
									error={error}
									placeholder='Description'
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) || 'Description is required',
								}
							}}
						/>
						<Button className={styles.updateButton}>Обновить</Button>
					</>)
				}
			</form>
		</Meta>
	)
}

export default GenreEdit