import { useFavorites } from '@/components/screens/favorites/useFavorites'
import { UserService } from '@/services/user.service'
import { toastError } from '@/utils/toastError'
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import styles from './FavoriteButton.module.scss'
import cn from 'classnames'

const FavoriteButton: FC<{ movieId: string, variant: string }> = ({ movieId, variant }) => {
	const [isSmashed, setIsSmashed] = useState(false)
	const { favoritesMovies, refetch } = useFavorites()

	useEffect(() => {
		if (!favoritesMovies) return

		const isHasMovie = favoritesMovies.some(movie => movie._id === movieId)
		if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
	}, [favoritesMovies, isSmashed, movieId])


	const { mutateAsync } = useMutation(
		'update favorites',
		() => UserService.toggleFavorite(movieId),
		{
			onError(error) {
				toastError(error, 'Update favorite list')
			},
			onSuccess() {
				setIsSmashed(!isSmashed)
				refetch()
			},
		}
	)


	return (
		<div className={cn(styles.list, {
			[styles.banner]: variant === 'banner',
			[styles.card]: variant === 'card',
		})}>
			<button
				onClick={() => mutateAsync()}
				className={cn(styles.button, {
					[styles.animate]: isSmashed,
				})}
				style={{ backgroundImage: `url('/heart-animation.png')` }}
				aria-label='Добавить или удалить из избранного'
			/>
			<p className={styles.buttonDesc}>{isSmashed ? 'Удалить из избранного' : 'Добавить в избранное'}</p>
		</div>
	)
}

export default FavoriteButton