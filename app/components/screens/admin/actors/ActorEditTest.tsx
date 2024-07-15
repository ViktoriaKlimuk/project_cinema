import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import AdminNavigation from '../AdminNavigation/AdminNavigation'
import styles from '../../../ui/form-elements/admin-from.module.scss'
import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'
import axios from 'axios'
import Image from 'next/image'
import Meta from '../../../../utils/meta/Meta'
import Heading from '../../../ui/heading/Heading'
import SkeletonLoader from '../../../ui/skeleton-loader/SkeletonLoader'
import Field from '../../../ui/form-elements/Field'
import SlugField from '../../../ui/form-elements/SlugField/SlugField'
import generateSlug from '../../../../utils/string/generateSlug'
import Button from '../../../ui/form-elements/Button'


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
				'X-API-KEY': '3CX5GDV-YG4MAGG-P44ABMA-KZW8JFC',
				'Content-Type': 'application/json',
			},
		}
		try {
			const response = await axios.get(`https://api.kinopoisk.dev/v1.4/person/${actorID}`, config);
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
				setValue("name", kinopoiskData.name)
				setValue("photo", kinopoiskData.photo)
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

export default ActorEditTest