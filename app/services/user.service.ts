import { getUsersUrl } from 'config/api.config'
import { IUser } from '@/shared/interfaces/user.types'
import axios from 'api/interceptors'
import { IProfileInput } from '@/components/screens/profile/profile.interface'
import { IMovie } from '@/shared/interfaces/movie.types'

export const UserService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async getProfile() {
		return axios.get<IUser>(getUsersUrl('/profile'))
	},
	async getFavorites() {
		return axios.get<IMovie[]>(getUsersUrl('/profile/favorites'))
	},
	async toggleFavorite(movieId: string) {
		return axios.post<string>(getUsersUrl('/profile/favorites'), {movieId})
	},
	async updateProfile(data: IProfileInput) {
		return axios.put<string>(getUsersUrl('/profile'), data)
	},
	async update(_id: string, data: IProfileInput) {
		return axios.put<string>(getUsersUrl(`/${_id}`), data)
	},
	async getById(_id: string) {
		return axios.get<IUser>(getUsersUrl(`/${_id}`))
	},
	async deleteUser(_id:string) {
		return axios.delete<string>(getUsersUrl(`/${_id}`))
	},
	
}
