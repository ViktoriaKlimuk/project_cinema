import { useRouter } from "next/router";
import { FC } from "react";
import { IMenuItem } from "./menu.interface";
import Link from "next/link";
import cn from 'classnames'
import styles from './Menu.module.scss';
import { MaterialIcon } from "../../../ui/MaterialIcon";

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li className={cn({
			[styles.active]: asPath === item.link,
		})}>
			<Link href={item.link}>
				<div className={styles.navlink}>
					{item.icon ? (<MaterialIcon name={item.icon} />) : "" }
					{item.title}
				</div>
			</Link>
		</li>
	)
}

export default MenuItem