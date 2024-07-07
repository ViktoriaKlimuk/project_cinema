import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '@/shared/interfaces/auth.types'
import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'



const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentAuthFields> = ({ children, Component: { isOnlyAdmin, isOnlyUser }, }) => {

	const { user } = useAuth()
	const { logout, checkAuth } = useActions()
	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth()
	}, []) //eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) logout()
	}, [pathname]) //eslint-disable-line react-hooks/exhaustive-deps

	return !isOnlyAdmin && !isOnlyUser ?
	<>{children}</>
	:
	<DynamicCheckRole Component={{isOnlyAdmin,isOnlyUser}}>
		{children}
		</DynamicCheckRole>
}

export default AuthProvider