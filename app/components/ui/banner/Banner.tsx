import { FC } from 'react'
import styles from './Banner.module.scss'

interface IBanner {
	image:string
	Detail?:FC | null
}


const Banner:FC<IBanner> = ({image, Detail}) => {
  return (
	 <div className={styles.banner}>
		<img src={image} alt="" draggable={false}/>
		{Detail && <Detail />}
	 </div>
  )
}

export default Banner