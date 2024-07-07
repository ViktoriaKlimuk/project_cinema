import { usePopularGenres } from "./usePopularGenres";
import Menu from "../Menu";
import SkeletonLoader from "components/ui/skeleton-loader/SkeletonLoader";

const GenreMenu = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div >
			<SkeletonLoader count={3} />
		</div>
	) : (
		<Menu
			menu={{
				title: 'Жанры',
				items: data || [],
			}}
		/>
	)
}

export default GenreMenu