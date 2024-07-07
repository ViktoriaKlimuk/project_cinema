import { useRouter } from "next/router";
import { FC } from "react";
import { IMenuItem } from "./menu.interface";
import Link from "next/link";
import cn from 'classnames'
import { MaterialIcon } from "components/ui/MaterialIcon";
import styles from './Menu.module.scss';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li className={cn({
			[styles.active]: asPath === item.link,
		})}>
			<Link href={item.link} >
				<a className={styles.navlink}>
					{item.icon ? (<MaterialIcon name={item.icon} />) : "" }
					{item.title}
				</a>
			</Link>
		</li>
	)
}

export default MenuItem