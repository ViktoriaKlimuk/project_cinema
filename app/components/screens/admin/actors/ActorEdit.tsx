import { FC } from 'react'
import { useForm } from 'react-hook-form'
import AdminNavigation from '../AdminNavigation/AdminNavigation'
import styles from '../../../ui/form-elements/admin-from.module.scss'
import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'
import Image from 'next/image'
import Meta from '../../../../utils/meta/Meta'
import Heading from '../../../ui/heading/Heading'
import SkeletonLoader from '../../../ui/skeleton-loader/SkeletonLoader'
import Field from '../../../ui/form-elements/Field'
import SlugField from '../../../ui/form-elements/SlugField/SlugField'
import generateSlug from '../../../../utils/string/generateSlug'
import Button from '../../../ui/form-elements/Button'


const ActorEdit: FC = () => {
	const { handleSubmit, register, formState: { errors }, setValue, getValues } = useForm<IActorEditInput>({
		mode: "onChange",
	})

	const { isLoading, onSubmit } = useActorEdit(setValue)
	return (
		<Meta title='Добавление актеров'>
			<AdminNavigation />
			<Heading title='Добавить актера' />
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
										setValue('slug', generateSlug(getValues('name')))
									}
									register={register}
									error={errors.slug}
								/>
							</div>
						</div>
						<div className={styles.photo}>
							<Field {...register('photo', {
								required: 'Photo is required!',
							})}
								placeholder='Photo'
								error={errors.photo}
								className={styles.input}
							/>
							<div className={styles.photoContainer}>
								<Image src={getValues('photo')} alt="" className={styles.actorPhoto} />
							</div>
						</div>
						<Button className={styles.updateButton}>Обновить</Button>
					</>)
				}
			</form>
		</Meta>
	)
}

export default ActorEdit