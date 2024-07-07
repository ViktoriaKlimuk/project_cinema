import { useQuery } from 'react-query'
import { GenreService } from 'services/genre.service'
import { IMenuItem } from '../menu.interface'
import { getGenreUrl } from 'config/url.config'
import { toastError } from '@/utils/toastError'




export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genres menu',
		() => GenreService.getPopularGenres(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre): IMenuItem => ({
							// icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						})
					)
					.splice(0, 10),
			onError(error) {
				toastError(error, 'Popular genres menu')
			},
		}
	)

	return queryData
}










// export const usePopularGenres = () => {
// 	const queryData = useQuery(
// 		'popular genres menu',
// 		() => GenreService.getAll(),
// 		{
// 			select: ({ data }) =>
// 				data
// 					.map(
// 						(genre) =>
// 							({
// 								// icon: genre.icon,
// 								link: getGenreUrl(genre.slug),
// 								title: genre.name,
// 							} as IMenuItem)
// 					)
// 					.splice(0, 20),
// 		}
// 	)

// 	return queryData
// }
