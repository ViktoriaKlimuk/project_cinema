import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Meta from '@/utils/meta/Meta'
import AdminNavigation from '../AdminNavigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import Field from '@/components/ui/form-elements/Field'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import generateSlug from '@/utils/string/generateSlug'
import styles from '../../../ui/form-elements/admin-from.module.scss'
import Button from '@/components/ui/form-elements/Button'
import dynamic from 'next/dynamic'
import { IMovieEditInput } from './movie-edit.interface'
import { useMovieEdit } from './useMovieEdit'
import { useAdminGenres } from './useAdminGenres'
import { useAdminActors } from './useAdminActors'


const DynamicTextEditor = dynamic(() => import('@/components/ui/form-elements/TextEditor'), {
	ssr: false,
})
const DynamicSelect = dynamic(() => import('@/components/ui/select/Select'), {
	ssr: false,
})

const MovieEdit: FC = () => {
	const { handleSubmit, register, formState: { errors }, setValue, getValues, control } = useForm<IMovieEditInput>({
		mode: "onChange",
	})

	const { isLoading, onSubmit } = useMovieEdit(setValue)

	const { isLoading: isGenresLoading, data: genres } = useAdminGenres()
	const { isLoading: isActorsLoading, data: actors } = useAdminActors()

	return (
		<Meta title='Добавление фильмов'>
			<AdminNavigation />
			<Heading title='Добавить фильм' />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (<SkeletonLoader count={3} />)
					: (<>
						<div className={styles.formSection}>
							<div className={styles.formWrapper}>
								<Field {...register('title', {
									required: 'Name is required!',
								})}
									placeholder='Name'
									error={errors.title}
									className={styles.input}
								/>

								<div className={styles.input}>
									<SlugField
										generate={() =>
											setValue('slug', generateSlug(getValues('title')))
										}
										register={register}
										error={errors.slug}
									/>
								</div>

								<Field {...register('ratingKinoPoisk', {
									required: 'ratingKinoPoisk is required!',
								})}
									placeholder='rating KinoPoisk'
									error={errors.ratingKinoPoisk}
									className={styles.input}
								/>
							</div>
							<div className={styles.formWrapper}>
								<Field {...register('parameters.country', {
									required: 'Country is required!',
								})}
									placeholder='Country'
									error={errors.parameters?.country}
									className={styles.input}
								/>

								<Field {...register('parameters.duration', {
									required: 'Duration is required!',
								})}
									placeholder='Duration (min.)'
									error={errors.parameters?.duration}
									className={styles.input}
								/>

								<Field {...register('parameters.year', {
									required: 'Year is required!',
								})}
									placeholder='Year'
									error={errors.parameters?.year}
									className={styles.input}
								/>
							</div>

							<div className={styles.formWrapper}>
								<Field {...register('movieType.series', {
								})}
									type='checkbox'
									placeholder='Series'
									error={errors.parameters?.country}
									className={styles.inputCheckbox}
								/>

								<Field {...register('movieType.cartoons', {
								})}
									type='checkbox'
									placeholder='Cartoons'
									error={errors.parameters?.duration}
									className={styles.inputCheckbox}
								/>
							</div>




						</div>
						<div className={styles.formSection}>
							<div className={styles.formWrapper}>
								<div className={styles.photo}>
									<Field {...register('poster', {
										required: 'Poster is required!',
									})}
										placeholder='Poster'
										error={errors.poster}
										className={styles.input}
									/>
									<div className={styles.photoContainer}>
										<img src={getValues('poster')} alt="" className={styles.actorPhoto} />
									</div>
								</div>
								<div className={styles.photo}>
									<Field {...register('bigPoster', {
										required: 'Big poster is required!',
									})}
										placeholder='Big poster'
										error={errors.bigPoster}
										className={styles.input}
									/>
									<div className={styles.photoContainer}>
										<img src={getValues('bigPoster')} alt="" className={styles.actorPhoto} />
									</div>
								</div>
							</div>
							<Field {...register('videoUrl', {
								required: 'video Url is required!',
							})}
								placeholder='Video-url'
								error={errors.videoUrl}
								className={styles.input}
								style={{ width: '50%' }}
							/>
						</div>

						<div className={styles.formSelect}>
							<Controller
								control={control}
								name='genres'
								render={({
									field,
									fieldState: { error }
								}) => (
									<DynamicSelect
										field={field}
										options={genres || []}
										isLoading={isGenresLoading}
										isMulti
										placeholder='Genres'
										error={error}
									/>
								)}
								rules={{
									required: 'Select at least one genre',
								}}
							/>
							<Controller
								control={control}
								name='actors'
								render={({
									field,
									fieldState: { error }
								}) => (
									<DynamicSelect
										field={field}
										options={actors || []}
										isLoading={isActorsLoading}
										isMulti
										placeholder='Actors'
										error={error}
									/>
								)}
								rules={{
									required: 'Select at least one actor',
								}}
							/>
						</div>

						<Field {...register('description', {
							required: 'Description is required!',
						})}
							placeholder='Description'
							error={errors.description}
							className={styles.description}
						/>

						{/* <Controller
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
						/> */}
						<Button className={styles.updateButton}>Обновить</Button>
					</>)
				}
			</form>
		</Meta>
	)
}

export default MovieEdit