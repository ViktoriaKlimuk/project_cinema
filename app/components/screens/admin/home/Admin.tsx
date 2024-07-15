import { FC } from "react"
import styles from './Admin.module.scss'
import Statistics from "./Statistics/Statistics"
import AdminNavigation from "../AdminNavigation/AdminNavigation"
import Meta from "../../../../utils/meta/Meta"
import Heading from "../../../ui/heading/Heading"

const Admin:FC = () => {
  return (
	 <Meta title="Админ панель">
		<AdminNavigation />
		<Heading title="Статистика"/>
		<Statistics />
	 </Meta>
  )
}

export default Admin