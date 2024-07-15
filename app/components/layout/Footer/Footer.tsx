import React from 'react'
import styles from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className={styles.footerNavigation}>
			<div className={styles.socIcons}>
				<Image 
				src='/tgLogo.svg' 
				width={85} 
				height={85} 
				draggable={false}>
					
				</Image>
			</div>
			<nav className={styles.links}>
				<Link href='/'>
					Условия использования
				</Link>
				<Link href='/'>
					Политика конфеденциальности
				</Link>
				<Link href='/'>
					Правообладателям
				</Link>
			</nav>
		</footer>
	)
}

export default Footer