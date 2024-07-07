import { FC } from 'react'
import { ITableItem } from './admin-table.interface'
import AdminTableHeader from './AdminTableHeader'
import SkeletonLoader from '../../skeleton-loader/SkeletonLoader'
import AdminTableItem from './AdminTableItem'
import styles from './AdminTable.module.scss'

interface IAdminTable {
	tableItems: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id:string) => void
}

const AdminTable: FC<IAdminTable> = ({ headerItems, isLoading, removeHandler, tableItems }) => {
	return (
		<div className={styles.adminTable}>
			<AdminTableHeader headerItems={headerItems} />
			{isLoading ? (
				<SkeletonLoader count={1} height={48} />
			) : tableItems.length ? (
				tableItems.map((tableItem) => (
					<AdminTableItem
						key={tableItem._id}
						removeHandler={() => removeHandler(tableItem._id)}
						tableItem={tableItem}
					/>
				))
			) : (
				<h5 className={styles.notFound}>Поля не найдены</h5>
			)}
		</div>
	)
}

export default AdminTable