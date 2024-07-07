import { axiosClassic } from 'api/interceptors'
import { getActorsUrl } from 'config/api.config'
import { IActor } from 'shared/interfaces/movie.types'
import axios from 'api/interceptors'
import { IActorEditInput } from '@/components/screens/admin/actors/actor-edit.interface'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async create() {
		return axios.post<string>(getActorsUrl('/'))
	},
	async update(_id: string, data: IActorEditInput) {
		return axios.put<string>(getActorsUrl(`/${_id}`), data)
	},
	async delete(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	},
	async getById(_id: string) {
		return axios.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	},
}
