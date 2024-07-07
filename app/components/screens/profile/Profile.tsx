import { FC } from 'react'
import styles from './Profile.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IProfileInput } from './profile.interface'
import { UserService } from '@/services/user.service'
import { useMutation, useQuery } from 'react-query'
import { toastError } from '@/utils/toastError'
import { toastr } from 'react-redux-toastr'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import AuthFields from '../auth/AuthFields'
import Button from '@/components/ui/form-elements/Button'






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
			<Heading title="Профиль" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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