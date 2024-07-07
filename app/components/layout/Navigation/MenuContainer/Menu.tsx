import { FC } from "react";
import { IMenu } from "./menu.interface";
import styles from './Menu.module.scss'
import MenuItem from "./MenuItem";
import dynamic from "next/dynamic";

const DynamicAuthItems = dynamic(() => import('../../Sidebar/auth/AuthItems'),{
	ssr:false,
})

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<h3 className={styles.heading}>{title}</h3>
			<ul className={styles.list}>
				{items.map((item) => (
				<MenuItem item={item} key={item.link} />
			))}
				{/* {title === 'General' ? <DynamicAuthItems /> : null} */}
			</ul>
		</div>
	)
}

export default Menu