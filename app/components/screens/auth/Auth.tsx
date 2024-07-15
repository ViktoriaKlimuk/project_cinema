
import { FC, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { IAuthInput } from "./auth.interface"
import styles from './Auth.module.scss'
import AuthFields from "./AuthFields"
import { useAuthRedirect } from "../../../hooks/useAuthRedirect"
import { useAuth } from "../../../hooks/useAuth"
import { useActions } from "../../../hooks/useActions"
import Meta from "../../../utils/meta/Meta"
import Heading from "../../ui/heading/Heading"
import Button from "../../ui/form-elements/Button"

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset
	} = useForm<IAuthInput>({
		mode: 'onBlur',
	})


	const { login, register } = useActions()


	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)
		reset()
	}



	return (
		<Meta title="Авторизация">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Авторизация" className={styles.heading} />
					<AuthFields formState={formState} register={registerInput} isPasswordRequired />
					<div className={styles.buttons}>
						<Button type="submit" onClick={() => setType('login')} disabled={isLoading}>Войти</Button>
						<Button type="submit" onClick={() => setType('register')} disabled={isLoading}>Регистрация</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}
export default Auth