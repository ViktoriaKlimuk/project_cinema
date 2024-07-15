
import { FC, useEffect, useState } from "react";
import LogoutButton from "./LogoutButton";
import styles from '../Sidebar.module.scss'
import { useAuth } from "../../../../hooks/useAuth";
import MenuItem from "../../Navigation/MenuContainer/MenuItem";
import { getAdminHomeUrl } from "../../../../config/url.config";

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


