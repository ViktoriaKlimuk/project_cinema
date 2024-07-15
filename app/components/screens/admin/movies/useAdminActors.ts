
import { useQuery } from "react-query"
import { ActorService } from "../../../../services/actor.service"
import { IOption } from "../../../ui/select/select.interface"
import { toastError } from "../../../../utils/toastError"

export const useAdminActors = () => {
	const queryData = useQuery(
		'List of actors',
		() => ActorService.getAll(), {
			select: ({ data }) =>
				data.map(
					(actor): IOption=> ({
						label:actor.name,
						value:actor._id,
					})
				),
			onError: (error) => {
				toastError(error, 'Actor list')
			},
		}
	)
	return queryData
}