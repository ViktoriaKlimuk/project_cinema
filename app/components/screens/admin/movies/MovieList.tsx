import Meta from "@/utils/meta/Meta"
import { FC } from "react"
import AdminNavigation from "../AdminNavigation/AdminNavigation"
import Heading from "@/components/ui/heading/Heading"
import AdminHeader from "@/components/ui/admin-table/AdminHeader/AdminHeader"
import { useMovies } from "./useMovies"
import AdminTable from "@/components/ui/admin-table/AdminTable/AdminTable"


const MovieList:FC = () => {
	const {handleSearch, searchTerm, isLoading, data, deleteAsync, createAsync} = useMovies()
  return (
	 <Meta title="Фильмы">
		<AdminNavigation />
		<Heading title="Фильмы" />
		<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync}/>
		<AdminTable isLoading={isLoading} removeHandler={deleteAsync} headerItems={['Title', 'Genre', 'Rating']} tableItems={data || []}/>
	 </Meta>
  )
}

export default MovieList