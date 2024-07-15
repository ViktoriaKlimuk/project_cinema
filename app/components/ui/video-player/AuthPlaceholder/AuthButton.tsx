
import Link from 'next/link'
import { FC } from 'react'
import { getMovieUrl } from '../../../../config/url.config'

const AuthButton:FC<{slug:string}> = ({slug}) => {
  return (
	 <Link href={`/auth?redirect=${getMovieUrl(slug)}`}>
		Войти
	 </Link>
  )
}

export default AuthButton