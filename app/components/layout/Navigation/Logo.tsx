import Link from "next/link";
import { FC } from "react";
import styles from '../Layout.module.scss'
import Image from "next/image";

const Logo: FC = () => {
	return (
		<Link href='/'>
			<div id="link" className={styles.logo}>
				<Image
					src='/logo.svg'
					width={300}
					height={50}
					draggable={false}
					alt='Онлайн кинотеатр'
				/>
			</div>
		</Link>
	)
}

export default Logo