import axios from "axios"
import { axiosClassic } from "../api/interceptors"
import { getGenresUrl } from "../config/api.config"
import { IGenre } from "../shared/interfaces/movie.types"
import { IGenreEditInput } from "../components/screens/admin/genres/genre-edit.interface"

export const GenreService = {
	async getByName(name: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${name}`))
	},

	async getBySlug(slug: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
	},

	async create() {
		return axios.post<string>(getGenresUrl('/'))
	},

	async update(_id: string, data: IGenreEditInput) {
		return axios.put<string>(getGenresUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	},

	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getCollections() {
		return axiosClassic.get<ICollection []>(getGenresUrl('/collections'))
	},

	async getById(_id: string) {
		return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	},

	async getPopularGenres(limit: number = 4) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(`/popular`), {
			params: {
				limit,
			},
		})
	},
}







