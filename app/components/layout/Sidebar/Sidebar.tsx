import { FC } from 'react';
import styles from './Sidebar.module.scss';
import MoviesContainer from './MoviesContainer/MoviesContainer';
import AuthItems from './auth/AuthItems';

const Sidebar:FC = () => {
	return (
		<div className={styles.sidebar}>
			{/* <AuthItems /> */}
			<MoviesContainer />
		</div>
	);
 }
 
 export default Sidebar