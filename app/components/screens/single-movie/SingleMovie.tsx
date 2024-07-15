import { FC } from 'react'
import { IMoviePage } from '../../../../pages/movie/[slug]'
import styles from './SingleMovie.module.scss'
import Content from './Content/Content'
import ContentList from './Content/ContentList/ContentList'
import dynamic from 'next/dynamic'
import { useUpdateCountOpened } from './RateMovie/useUpdateCountOpened'
import Image from 'next/image'
import Meta from '../../../utils/meta/Meta'
import Banner from '../../ui/banner/Banner'
import { getActorUrl, getGenreUrl } from '../../../config/url.config'
import SubHeading from '../../ui/heading/SubHeading'
import Gallery from '../../ui/gallery/Gallery'


// const DynamicPlayer = dynamic(() => import('@/components/ui/video-player/VideoPlayer'), {
// 	ssr: false
// })
const DynamicRating = dynamic(() => import('./RateMovie/RateMovie'), {
	ssr: false
})


const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {

	useUpdateCountOpened(movie.slug)

	return (
		<Meta title={movie.title} description={`Смотреть ${movie.title}`}>
			<div className={styles.singleMovie}>
				<Banner image={movie.bigPoster} Detail={() => <Content movie={movie} />} />
				<div className={styles.wrapper}>



					<section className={styles.actors}>
						<ContentList
							variant='actors'
							name='Актеры: '
							links={movie.actors.slice(0, 7).map(a => ({
								_id: a._id,
								link: getActorUrl(a.slug),
								title: a.name,
								photo: a.photo
							}))}
						/>
					</section>

					<section className={styles.videoContainer}>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/8VluPyWvxeE?si=YQk6k7NdLhVjh-Ln&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
						<div className={styles.details}>
							<h1>О Фильме:</h1>
							<aside className={styles.detailsContainer}>
								<div className={styles.filmDesc}>
									<span>Короткое описание: </span>
									<p>{movie.shortDescription}</p>
								</div>
								<div className={styles.filmDesc}>
									<span>Сюжет: </span>
									<p>{movie.description}</p>
								</div>
								<div className={styles.params}>
									<p><span>Дата выхода: </span>{movie.parameters.year}</p>
									<p><span>Страна: </span> {movie.parameters.country}</p>
									{movie.movieType === 'tv-series' ? (
										<>
											<p><span>Период выпуска: </span> {movie.serial?.releaseYears}</p>
											<p><span>Количество сезонов: </span> {movie.serial?.seasonsInfo}</p>
											<p><span>Продолжительность серии: ~ </span> {movie.serial?.seriesLength} мин.</p>
										</>
									): (
										<p><span>Продолжительность: </span> {movie.parameters.duration} мин.</p>
									)}

							<ContentList
								name="Жанр:"
								links={movie.genres.slice(0.3).map(g => ({
									_id: g._id,
									link: getGenreUrl(g.slug),
									title: g.name
								}))} />
						</div>
						<div className={styles.detailsRating}>
							<h4>Рейтинги фильма:</h4>
							<div className={styles.ratingContainer}>
								<div>
									<Image src={'/kinopoiskRating.svg'} width={30} height={30} draggable={false} alt='Рейтинг фильма' />
									<p>{movie.ratingKinoPoisk?.toFixed(1)}<span className={styles.votes}>({movie.votes})</span></p>
								</div>
								<div>
									<Image src={'/starRating.svg'} width={35} height={35} draggable={false} alt='Рейтинг фильма от нашего сайта' />
									<p>{movie.rating.toFixed(1)}</p>
								</div>
							</div>
							<DynamicRating slug={movie.slug} id={movie._id} />
						</div>
					</aside>
				</div>
			</section>
			{/* <DynamicPlayer slug={movie.slug} videoSource={movie.videoUrl}/> */}

			<section className={styles.section}>
				<SubHeading title='Похожие фильмы' />
				{similarMovies.length && <Gallery items={similarMovies} />}
			</section>
			{/* <Gallery items={similarMovies} /> */}


		</div>
			</div >
		</Meta >
	)
}

export default SingleMovie