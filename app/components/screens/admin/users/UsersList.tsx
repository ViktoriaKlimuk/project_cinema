
import { FC } from "react"
import AdminNavigation from "../AdminNavigation/AdminNavigation"
import { useUsers } from "./useUsers"
import Meta from "../../../../utils/meta/Meta"
import Heading from "../../../ui/heading/Heading"
import AdminHeader from "../../../ui/admin-table/AdminHeader/AdminHeader"
import AdminTable from "../../../ui/admin-table/AdminTable/AdminTable"


const UsersList:FC = () => {
	const {handleSearch, searchTerm, isLoading, data, deleteAsync} = useUsers()
  return (
	 <Meta title="Пользователи">
		<AdminNavigation />
		<Heading title="Пользователи" />
		<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm}/>
		<AdminTable isLoading={isLoading} removeHandler={deleteAsync} headerItems={['Email', 'Дата регистрации']} tableItems={data || []}/>
	 </Meta>
  )
}

export default UsersList