import { FC } from 'react'
import { IUploadField } from './uploadField.interface'
import { useUpload } from './useUpload'
import cn from 'classnames'
import styles from './UploadField.module.scss'
import SkeletonLoader from '../../skeleton-loader/SkeletonLoader'
import Image from 'next/image'

const UploadField: FC<IUploadField> = ({
	placeholder,
	error,
	style,
	value,
	folder,
	onChange,
	isNoImage = false,
}) => {
	const { uploadFile, isLoading } = useUpload(onChange, folder)

  return (
	 <div className={cn(styles.field, styles.uploadFile)}>
		<div className={styles.uploadFlex}>
			<label>
				<span>{placeholder}</span>
				<input type="file" onChange={uploadFile}/>
				{error && <div className={styles.error}>{error.message}</div>}
			</label>

			{!isNoImage && (
				<div className={styles.uploadImageContainer}>
				{isLoading ? (  
					<SkeletonLoader count={1} className={styles.skeleton}/>
				 ) : (
					value && <Image src={value} alt='' className={styles.imageFile} layout='fill'/>
				 )}
				</div>
			)}
		</div>
	 </div>
  )
}

export default UploadField