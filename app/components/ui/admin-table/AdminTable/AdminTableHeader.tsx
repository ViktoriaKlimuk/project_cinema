import { FC } from 'react'
import styles from './AdminTable.module.scss'
import cn from 'classnames'

const AdminTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<div className={cn(styles.item, styles.itemHeader)}>
			{headerItems.map(value => (
				<div key={value}>{value}</div>
			))}
			<h5>Actions</h5>
		</div>
	)
}

export default AdminTableHeader