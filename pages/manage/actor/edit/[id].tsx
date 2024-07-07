
import ActorEdit from "@/components/screens/admin/actors/ActorEdit"
import ActorEditTest from "@/components/screens/admin/actors/ActorEditTest"
import { NextPageAuth } from "@/shared/interfaces/auth.types"

const ActorEditPage:NextPageAuth = () => {
  return (
	<ActorEditTest />
  )
}
ActorEditPage.isOnlyAdmin = true

export default ActorEditPage