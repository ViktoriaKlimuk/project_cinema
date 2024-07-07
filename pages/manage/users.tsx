import UsersList from "@/components/screens/admin/users/UsersList"
import { NextPageAuth } from "@/shared/interfaces/auth.types"

const UserListPage:NextPageAuth = () => {
  return (
	 <UsersList />
  )
}
UserListPage.isOnlyAdmin = true

export default UserListPage