
import GenreList from "@/components/screens/admin/genres/GenreList"
import { NextPageAuth } from "@/shared/interfaces/auth.types"

const GenreListPage:NextPageAuth = () => {
  return (
	 <GenreList />
  )
}
GenreListPage.isOnlyAdmin = true

export default GenreListPage