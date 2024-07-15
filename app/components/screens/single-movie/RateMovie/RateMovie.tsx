
import { FC } from 'react'
import { useRateMovie } from './useRateMovie'
import styles from './RateMovie.module.scss'
import StarRating from 'react-star-rating-component'
import { useAuth } from '../../../../hooks/useAuth'

interface IRateMovie {
	id: string
	slug: string
}

const RateMovie: FC<IRateMovie> = ({ id, slug }) => {
	const { user } = useAuth()
	const { handleClick,handleHover, isSended, rating } = useRateMovie(id)

	return (
		<div className={styles.wrapper}>
			<h3>Оцените фильм</h3>
			{user ? (
				<>
					{isSended ? (
						<p className={styles.thanks}>Спасибо за рейтинг!</p>
					) : (
						<StarRating
							name='star-rating'
							value={rating}
							onStarClick={handleClick}
							starCount={10}
							emptyStarColor='#4f4f4f'
							starColor={'#2415CA'}
						/>
					)}
				</>
			) : (
				<p>Авторизируйтесь чтобы поставить рейтинг!</p>
			)}
		</div>
	)
}

export default RateMovie