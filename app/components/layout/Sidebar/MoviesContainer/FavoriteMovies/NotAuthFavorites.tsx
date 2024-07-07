import styles from './FavoriteMovies.module.scss'

const NotAuthFavorites = () => {
	return(
	<div className={styles.notAuth}>Для просмотра Ваших избранных фильмов пожалуйста авторизируйтесь!</div>
	)
}

export default NotAuthFavorites