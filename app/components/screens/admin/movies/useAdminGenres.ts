
import { useQuery } from "react-query"
import { GenreService } from "../../../../services/genre.service"
import { IOption } from "../../../ui/select/select.interface"
import { toastError } from "../../../../utils/toastError"

export const useAdminGenres = () => {
	const queryData = useQuery(
		'List of genres',
		() => GenreService.getAll(), {
			select: ({ data }) =>
				data.map(
					(genre): IOption => ({
						label:genre.name,
						value:genre._id,
					})
				),
			onError: (error) => {
				toastError(error, 'Genre list')
			},
		}
	)
	return queryData
}