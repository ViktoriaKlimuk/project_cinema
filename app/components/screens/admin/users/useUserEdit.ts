import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { IUserEditInput } from "./user-edit.interface";
import { toastr } from "react-redux-toastr";
import { UserService } from "../../../../services/user.service";
import { toastError } from "../../../../utils/toastError";
import { getAdminUrl } from "../../../../config/url.config";



export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { query, push } = useRouter()

	const userId = String(query.id)

	const { isLoading } = useQuery(
		['User', userId],
		() => UserService.getById(userId),
		{
			onSuccess({ data }) {
				setValue('email', data.email)
				setValue('isAdmin', data.isAdmin)
			},
			onError(error) {
				toastError(error, 'Get User')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update User',
		(data: IUserEditInput) => UserService.update(userId, data),
		{
			onError(error) {
				toastError(error, 'Update User')
			},
			onSuccess() {
				toastr.success('Update User', 'update was successful')
				push(getAdminUrl('users'))
			},
		}
	)

	const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}