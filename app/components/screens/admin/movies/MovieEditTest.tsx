import { FC, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import AdminNavigation from '../AdminNavigation/AdminNavigation'
import styles from '../../../ui/form-elements/admin-from.module.scss'
import dynamic from 'next/dynamic'
import { IMovieEditInput } from './movie-edit.interface'
import { useMovieEdit } from './useMovieEdit'
import { useAdminGenres } from './useAdminGenres'
import { useAdminActors } from './useAdminActors'
import axios from 'axios'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { GenreService } from '../../../../services/genre.service'
import { ActorService } from '../../../../services/actor.service'
import Meta from '../../../../utils/meta/Meta'
import Heading from '../../../ui/heading/Heading'
import SkeletonLoader from '../../../ui/skeleton-loader/SkeletonLoader'
import Field from '../../../ui/form-elements/Field'
import SlugField from '../../../ui/form-elements/SlugField/SlugField'
import generateSlug from '../../../../utils/string/generateSlug'
import Button from '../../../ui/form-elements/Button'

const DynamicSelect = dynamic(() => import('../../../ui/select/Select'), {
	ssr: false,
})

const MovieEditTest: FC = () => {
	const [filmID, setFilmID] = useState('')
	const [kinopoiskData, setKinopoiskData] = useState([]);



	const handleGetMovieData = (event) => {
		event.preventDefault()
		setFilmID(event.target.value)
		getDataKinopoisk()
	}

	const filteredGenres = (genresData, kinopoiskData) => {
		const genres = kinopoiskData.map(item => item.name)
		const filterData = genresData.filter(item => genres.includes(item.label.toLowerCase()));
		return filterData.map(item => item.value)
	}
	const filteredActors = (actorsData, kinopoiskData) => {
		const actors = kinopoiskData.map(item => item.name)
		const filterData = actorsData.filter(item => actors.includes(item.label));
		return filterData.map(item => item.value)
	}


	const getDataKinopoisk = async () => {
		const config = {
			headers: {
				'X-API-KEY': '3CX5GDV-YG4MAGG-P44ABMA-KZW8JFC',
				'Content-Type': 'application/json',
			},
		}
		try {
			const response = await axios.get(`https://api.kinopoisk.dev/v1.4/movie/${filmID}`, config);
			setKinopoiskData(response.data);
			console.log(response.data)
		} catch (error) {
			console.error('Error fetching todos:', error);
		}
	};

	const getStaticProps: GetStaticProps = async () => {
		try {
			const { data: genres } = await GenreService.getAll()
			const { data: actors } = await ActorService.getAll()
			return {
				props: {
					genres,
					actors
				},
				revalidate: 100,
			}
		} catch (e) {
			// console.log(errorCatch(e))
			return {
				// props: {},
				notFound: true,
			}
		}
	}


	// useEffect(() => {
	// 	const getDataKinopoisk = async () => {
	// const config = {
	// 	headers: {
	// 		'X-API-KEY': 'a5bdd094-40d7-4f9c-b23b-d2a4cfc5042c',
	// 		'Content-Type': 'application/json',
	//   },
	//  }
	// 		try {
	// 			const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmID}`, config);
	// 			setKinopoisk(response.data);
	// 		} catch (error) {
	// 			console.error('Error fetching todos:', error);
	// 		}
	// 	};
	// 	getDataKinopoisk();
	// }, []);




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

			<input type="text" value={filmID} onChange={handleGetMovieData} className={styles.input} />
			<button onClick={getDataKinopoisk}>Спарсить</button>

			<button type="button" onClick={() => {
				setValue("kinopoiskID", filmID)
				setValue("poster", kinopoiskData.poster.previewUrl)
				setValue("bigPoster", kinopoiskData.poster.url)
				setValue("title", kinopoiskData.name)
				setValue("description", kinopoiskData.description)
				setValue("parameters.year", kinopoiskData.year)
				setValue("parameters.duration", kinopoiskData.movieLength || kinopoiskData.seriesLength || 0)
				setValue("parameters.country", kinopoiskData.countries.map(c => c.name).join())
				setValue("movieType", kinopoiskData.type)
				setValue("genres", filteredGenres(genres, kinopoiskData.genres))
				setValue("actors", filteredActors(actors, kinopoiskData.persons))

				setValue("serial.releaseYears", kinopoiskData.releaseYears ? `${kinopoiskData.releaseYears[0].start} - ${kinopoiskData.releaseYears[0].end}` : '')
				setValue("serial.seasonsInfo", kinopoiskData.seasonsInfo.length || 0)
				setValue("serial.seriesLength", kinopoiskData.seriesLength || 0)
				
				setValue("ratingKinoPoisk", kinopoiskData.rating.kp)
				setValue("votes", kinopoiskData.votes.kp)
				setValue("shortDescription", kinopoiskData.shortDescription)
				setValue("trailer", kinopoiskData.videos.trailers[0].url)
				setValue("quality", '4k')
				// setValue("kinopoiskID", filmID)
				// setValue("parameters.year", kinopoiskData.year)
				// setValue("title", kinopoiskData.nameRu)
				// setValue("parameters.duration", kinopoiskData.filmLength)
				// setValue("parameters.country", kinopoiskData.countries.map(c => c.country).join())
				// setValue("poster", kinopoiskData.posterUrlPreview)
				// setValue("bigPoster", kinopoiskData.posterUrl)
				// setValue("ratingKinoPoisk", kinopoiskData.ratingKinopoisk)
				// setValue("description", kinopoiskData.description)
				// setValue("genres", filteredGenres(genres, kinopoiskData.genres))
				// setValue("actors", filteredActors(genres, kinopoiskData.genres))
			}}>
				Сгенерировать поля
			</button>


			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (<SkeletonLoader count={3} />)
					: (<>
						<div className={styles.formSection}>

							<div className={styles.formWrapper}>
								<Field {...register('kinopoiskID', {
									required: 'ID is required!',
								})}
									placeholder='KinoPoiskID'
									error={errors.kinopoiskID}
									className={styles.input}
								/>

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
							</div>

							<div className={styles.formWrapper}>
								<Field {...register('description', {
									required: 'Description is required!',
								})}
									placeholder='Description'
									error={errors.description}
									className={styles.description}
								/>

								<Field {...register('shortDescription', {
									required: 'shortDescription is required!',
								})}
									placeholder='shortDescription'
									error={errors.description}
									className={styles.description}
								/>

								<Field {...register('trailer', {
									required: 'trailer is required!',
								})}
									placeholder='Trailer'
									error={errors.description}
									className={styles.description}
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
								<Field {...register('votes', {
									required: 'votes is required!',
								})}
									placeholder='Votes'
									error={errors.votes}
									className={styles.input}
								/>

								<Field {...register('ratingKinoPoisk', {
									required: 'ratingKinoPoiskis required!',
								})}
									placeholder='rating KinoPoisk'
									error={errors.ratingKinoPoisk}
									className={styles.input}
								/>

								<Field {...register('movieType', {
									required: 'movieType is required!',
								})}
									placeholder='Movie type'
									error={errors.movieType}
									className={styles.input}
								/>
							</div>


							<div className={styles.formWrapper}>
								<Field {...register('serial.releaseYears')}
									placeholder='releaseYears'
									error={errors.votes}
									className={styles.input}
								/>

								<Field {...register('serial.seasonsInfo', {
									required: 'ratingKinoPoiskis required!',
								})}
									defaultValue={0}
									placeholder='seasonsInfo'
									error={errors.ratingKinoPoisk}
									className={styles.input}
								/>

								<Field {...register('serial.seriesLength', {
									required: 'movieType is required!',
								})}
									defaultValue={0}
									placeholder='seriesLength'
									error={errors.movieType}
									className={styles.input}
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
										<Image src={getValues('poster')} alt="" className={styles.actorPhoto} />
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
										<Image src={getValues('bigPoster')} alt="" className={styles.actorPhoto} />
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


						<Button className={styles.updateButton}>Обновить</Button>
					</>)
				}
			</form>
		</Meta >
	)
}

export default MovieEditTest