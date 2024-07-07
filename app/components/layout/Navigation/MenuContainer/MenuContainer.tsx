import { FC } from "react";
import Menu from "./Menu";
import { firstMenu, userMenu } from "./menu.data";
import GenreMenu from "./genres/GenreMenu";
import styles from './Menu.module.scss'

const MenuContainer:FC = () => {
	return (
		<>
			<Menu menu={firstMenu} />
			{/* <GenreMenu /> */}
			{/* <Menu menu={userMenu} /> */}
		</>
	)
}

export default MenuContainer