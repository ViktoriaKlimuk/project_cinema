import { FC } from "react"
import styles from './Admin.module.scss'
import Meta from "@/utils/meta/Meta"
import Statistics from "./Statistics/Statistics"
import Heading from "@/components/ui/heading/Heading"
import AdminNavigation from "../AdminNavigation/AdminNavigation"

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