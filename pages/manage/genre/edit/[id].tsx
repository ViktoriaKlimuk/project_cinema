import GenreEdit from "@/components/screens/admin/genres/GenreEdit"
import { NextPageAuth } from "@/shared/interfaces/auth.types"

const GenreEditPage:NextPageAuth = () => {
  return (
	<GenreEdit />
  )
}
GenreEditPage.isOnlyAdmin = true

export default GenreEditPage