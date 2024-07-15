
import { FC } from "react"
import AdminNavigation from "../AdminNavigation/AdminNavigation"
import { useActors } from "./useActors"
import Meta from "../../../../utils/meta/Meta"
import Heading from "../../../ui/heading/Heading"
import AdminHeader from "../../../ui/admin-table/AdminHeader/AdminHeader"
import AdminTable from "../../../ui/admin-table/AdminTable/AdminTable"


const ActorList:FC = () => {
	const {handleSearch, searchTerm, isLoading, data, deleteAsync,createAsync} = useActors()
  return (
	 <Meta title="Актеры">
		<AdminNavigation />
		<Heading title="Актеры" />
		<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync}/>
		<AdminTable isLoading={isLoading} removeHandler={deleteAsync} headerItems={['Name', 'Slug', 'Count movies']} tableItems={data || []}/>
	 </Meta>
  )
}

export default ActorList