import { FC } from 'react';
import styles from './Navigation.module.scss';
import Logo from './Logo';
import MenuContainer from './MenuContainer/MenuContainer';
import Sidebar from '../Sidebar/Sidebar';
import Search from '../Search/Search';
import AuthItems from '../Sidebar/auth/AuthItems';

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<div className={styles.leftSide}>
				<Logo />
				<MenuContainer />
			</div>
			<div className={styles.rightSide}>
				<Search />
				<AuthItems />
			</div>
			{/* <Sidebar /> */}
		</div>
	);
}

export default Navigation