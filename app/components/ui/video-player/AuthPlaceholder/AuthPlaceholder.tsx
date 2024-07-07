import { FC } from 'react'
import AuthButton from './AuthButton'

const AuthPlaceholder:FC<{slug:string}> = ({slug}) => {
  return (
	 <div>
		<div>
			<p>Войти в систему для просмотра фильмов</p>
			<AuthButton slug={slug}/>
		</div>
	 </div>
  )
}

export default AuthPlaceholder