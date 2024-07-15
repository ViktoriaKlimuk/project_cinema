import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useUserEdit } from './useUserEdit'
import AdminNavigation from '../AdminNavigation/AdminNavigation'
import styles from '../../../ui/form-elements/admin-from.module.scss'
import AuthFields from '../../auth/AuthFields'
import { IUserEditInput } from './user-edit.interface'
import Meta from '../../../../utils/meta/Meta'
import Heading from '../../../ui/heading/Heading'
import SkeletonLoader from '../../../ui/skeleton-loader/SkeletonLoader'
import Button from '../../../ui/form-elements/Button'



const UserEdit: FC = () => {
	const { handleSubmit, register, formState, setValue, control } = useForm<IUserEditInput>({
		mode: "onChange",
	})

	const { isLoading, onSubmit } = useUserEdit(setValue)

	return (
		<Meta title='Добавление пользователя'>
			<AdminNavigation />
			<Heading title='Добавить пользователя' />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (<SkeletonLoader count={3} />
				) : (
					<>
						<AuthFields register={register} formState={formState} />
						<Controller
							control={control}
							name='isAdmin'
							render={({ field }) => (
								<button onClick={(e) => {
									e.preventDefault()
									field.onChange(!field.value)
								}} className={styles.buttonAdmin} aria-label='Админ кнопка'>
									{field.value ? 'Пользователь' : 'Админ'}
								</button>
							)}></Controller>
						<Button className={styles.updateButton}>Обновить</Button>
					</>)
				}
			</form>
		</Meta>
	)
}

export default UserEdit