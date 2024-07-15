
import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import Field from '../../ui/form-elements/Field'
import { validEmail, validPassword } from '../../../shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({ register, formState: { errors }, isPasswordRequired = false }) => {
	return (
		<>
			<Field {...register('email', {
				required: "Емейл обязателен!",
				pattern: {
					value: validEmail,
					message: "Введите валидный Емейл!"
				}
			})}
				placeholder="E-Mail"
				error={errors.email} />

			<Field {...register('password', isPasswordRequired? {
				required: "Пароль обязателен!",
				pattern: {
					value: validPassword,
					message: "Введите валидный пароль! Пример: Pass123!@"
				}
			} : {})}
				placeholder="Password"
				type='password'
				error={errors.password} />
		</>
	)
}

export default AuthFields