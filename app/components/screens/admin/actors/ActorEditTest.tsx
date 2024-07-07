import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import Meta from '@/utils/meta/Meta'
import AdminNavigation from '../AdminNavigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import Field from '@/components/ui/form-elements/Field'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import generateSlug from '@/utils/string/generateSlug'
import styles from '../../../ui/form-elements/admin-from.module.scss'
import Button from '@/components/ui/form-elements/Button'
import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'
import axios from 'axios'


const ActorEditTest: FC = () => {
	const { handleSubmit, register, formState: { errors }, setValue, getValues } = useForm<IActorEditInput>({
		mode: "onChange",
	})
	const { isLoading, onSubmit } = useActorEdit(setValue)

	const [actorID, setActorID] = useState('')
	const [kinopoiskData, setKinopoiskData] = useState([]);

	const handleGetActorData = (event) => {
		event.preventDefault()
		setActorID(event.target.value)
		getDataKinopoisk()
		console.log(kinopoiskData)
	}


	const getDataKinopoisk = async () => {
		const config = {
			headers: {
				'X-API-KEY': 'a5bdd094-40d7-4f9c-b23b-d2a4cfc5042c',
				'Content-Type': 'application/json',
			},
		}
		try {
			const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v1/staff/${actorID}`, config);
			setKinopoiskData(response.data);
			console.log(response.data)
		} catch (error) {
			console.error('Error fetching todos:', error);
		}
	};


	return (
		<Meta title='Добавление актеров'>
			<AdminNavigation />
			<Heading title='Добавить актера' />

			<input type="text" value={actorID} onChange={handleGetActorData} className={styles.input} />
			<button onClick={getDataKinopoisk}>Спарсить</button>
			<button type="button" onClick={() => {
				setValue("kinopoiskId", actorID)
				setValue("name", kinopoiskData.nameRu)
				setValue("photo", kinopoiskData.posterUrl)
			}}>
				Сгенерировать поля
			</button>



			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (<SkeletonLoader count={3} />)
					: (<>
						<div className={styles.formWrapper}>
						<Field {...register('kinopoiskId', {
								required: 'kinopoiskId is required!',
							})}
								placeholder='КиноПоиск ID'
								error={errors.kinopoiskId}
								className={styles.input}
							/>

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
								<img src={getValues('photo')} alt="" className={styles.actorPhoto} />
							</div>
						</div>
						<Button className={styles.updateButton}>Обновить</Button>
					</>)
				}
			</form>
		</Meta>
	)
}

export default ActorEditTest