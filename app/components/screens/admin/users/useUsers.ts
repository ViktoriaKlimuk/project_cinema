import { ITableItem } from '@/components/ui/admin-table/AdminTable/admin-table.interface'
import { getAdminUrl } from 'config/url.config'
import { useDebounce } from '@/hooks/useDebounce'
import { UserService } from '@/services/user.service'
import { convertMongoDate } from '@/utils/date/convertMongoDate'
import { toastError } from '@/utils/toastError'
import { toastr } from 'react-redux-toastr'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['user list', debounceSearch],
		() => UserService.getAll(debounceSearch),
		{
			select: ({ data }) =>
				data.map(
					(user): ITableItem => ({
						_id: user._id,
						editUrl: getAdminUrl(`user/edit/${user._id}`),
						items: [user.email, convertMongoDate(user.createdAt),],
					})
				),
			onError: (error) => {
				toastError(error, 'User list')
			},
		}
	)

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete user',
		(userId: string) => UserService.deleteUser(userId),
		{
			onError: (error) => {
				toastError(error, 'Delete user')
			},
			onSuccess: () => {
				toastr.success('Delete user', 'Успешно удален!')
				queryData.refetch()
			},
		}
	)
	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
