import { FC } from 'react'
import styles from './Profile.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IProfileInput } from './profile.interface'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import AuthFields from '../auth/AuthFields'
import { UserService } from '../../../services/user.service'
import { toastError } from '../../../utils/toastError'
import Meta from '../../../utils/meta/Meta'
import Heading from '../../ui/heading/Heading'
import SkeletonLoader from '../../ui/skeleton-loader/SkeletonLoader'
import Button from '../../ui/form-elements/Button'

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange',
		})

	const { isLoading } = useQuery('profile', () => UserService.getProfile(), {
		onSuccess({ data }) {
			setValue('email', data.email)
		},
		onError(error) {
			toastError(error, 'Get profile')
		},
	})

	const { mutateAsync } = useMutation(
		'update profile',
		(data: IProfileInput) => UserService.updateProfile(data),
		{
			onError(error) {
				toastError(error, 'Update profile')
			},
			onSuccess() {
				toastr.success('Update profile', 'Успешно обновлено!')
			},
		}
	)

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data)
	}

	return (
		<Meta title="Профиль">
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Heading title="Профиль" />
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<AuthFields
						register={register}
						formState={formState}
						isPasswordRequired={false}
					/>
				)}

				<Button>Обновить</Button>
			</form>
		</Meta>
	)
}

export default Profile