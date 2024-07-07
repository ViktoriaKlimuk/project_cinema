import { FC } from 'react'
import Button from '@/components/ui/form-elements/Button'

const AdminCreateButton:FC<{onClick: () => void}> = ({onClick}) => {
  return (
	 <Button onClick={onClick}>Создать новый</Button>
  )
}

export default AdminCreateButton