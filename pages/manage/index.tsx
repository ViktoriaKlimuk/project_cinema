import Admin from "@/components/screens/admin/home/Admin"
import { NextPageAuth } from "@/shared/interfaces/auth.types"

const AdminPage:NextPageAuth = () => {
  return (
	 <Admin />
  )
}

AdminPage.isOnlyAdmin = true
export default AdminPage