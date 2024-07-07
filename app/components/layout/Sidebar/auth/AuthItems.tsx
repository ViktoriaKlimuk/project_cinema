import MenuItem from "components/layout/Navigation/MenuContainer/MenuItem";
import { useAuth } from "hooks/useAuth";
import { FC, useEffect, useState } from "react";
import LogoutButton from "./LogoutButton";
import { getAdminHomeUrl } from "config/url.config";
import styles from '../Sidebar.module.scss'

const AuthItems: FC = () => {
	const { user } = useAuth()

	const [isClient, setIsClient] = useState('')
 
	useEffect(() => {
	  setIsClient(user)
	}, [user, isClient])

	return (
		<>
			{user && isClient ?
				<div className={styles.profile}>
					<MenuItem item={{
						icon: 'MdSettings',
						link: '/profile',
						title: 'Профиль'
					}} />
					<LogoutButton />
				</div>
				:
				<div className={styles.login}>
					<MenuItem item={{
						icon: 'MdLogin',
						link: '/auth',
						title: 'Войти'
					}} />
				</div>
			}

			{(isClient?.isAdmin && user?.isAdmin) &&
			<div className={styles.admin}>
				<MenuItem item={{
					icon: 'MdOutlineLock',
					link: getAdminHomeUrl(),
					title: 'Admin panel'
				}} />
			</div>
			}
		</>
	)
}

export default AuthItems


