
import { FC } from "react"
import AdminNavigation from "../AdminNavigation/AdminNavigation"
import { useGenres } from "./useGenres"
import Meta from "../../../../utils/meta/Meta"
import Heading from "../../../ui/heading/Heading"
import AdminHeader from "../../../ui/admin-table/AdminHeader/AdminHeader"
import AdminTable from "../../../ui/admin-table/AdminTable/AdminTable"


const GenreList: FC = () => {
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
	} = useGenres()

	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />
			<AdminHeader
				onClick={createAsync}
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
			<AdminTable
				tableItems={data || []}
				headerItems={['Name', 'Slug']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default GenreList