import { ChangeEvent, FC } from 'react'
import styles from './AdminHeader.module.scss'
import SearchField from '../../search-field/SearchField'
import AdminCreateButton from './AdminCreateButton'

interface IAdminHeader {
	onClick?: () => void,
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const AdminHeader: FC<IAdminHeader> = ({ onClick, handleSearch, searchTerm }) => {
	return (
		<div className={styles.header}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} placeholder='Поиск ...'/>
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	)
}

export default AdminHeader