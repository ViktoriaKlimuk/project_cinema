import ActorList from "@/components/screens/admin/actors/ActorList"
import { NextPageAuth } from "@/shared/interfaces/auth.types"

const ActorListPage:NextPageAuth = () => {
  return (
	 <ActorList />
  )
}
ActorListPage.isOnlyAdmin = true

export default ActorListPage