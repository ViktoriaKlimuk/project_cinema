import UserEdit from "@/components/screens/admin/users/UserEdit"
import { NextPageAuth } from "@/shared/interfaces/auth.types"

const UserEditPage:NextPageAuth = () => {
  return (
	<UserEdit />
  )
}
UserEditPage.isOnlyAdmin = true

export default UserEditPage