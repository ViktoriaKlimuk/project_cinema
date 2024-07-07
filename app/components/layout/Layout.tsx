import { FC, PropsWithChildren } from 'react';
import styles from './Layout.module.scss';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';
import Search from './Search/Search';

import Slider from '../ui/slider/Slider';
import AuthItems from './Sidebar/auth/AuthItems';
import Footer from './Footer/Footer';

const Layout: FC<PropsWithChildren> = ({ children }) => {

	return (
		<>
			<div className={styles.layout}>
				<Navigation />
				<div className={styles.center}>
					<div className={styles.centerNavigation}>
					</div>
					{children}
				</div>
				{/* <Sidebar /> */}
				<Footer />
			</div>
		</>
	);
}

export default Layout