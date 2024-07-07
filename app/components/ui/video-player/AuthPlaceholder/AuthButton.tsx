import { getMovieUrl } from 'config/url.config'
import Link from 'next/link'
import { FC } from 'react'

const AuthButton:FC<{slug:string}> = ({slug}) => {
  return (
	 <Link href={`/auth?redirect=${getMovieUrl(slug)}`}>
		<a>Войти</a>
	 </Link>
  )
}

export default AuthButton