import { FC } from "react";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import styles from './SkeletonLoader.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader:FC<SkeletonProps> = ({className, ...rest}) => {
	return (
		<Skeleton {...rest}
			baseColor='#222'
			highlightColor="#130B2B"
			className={styles.skeleton}/>
	)
}

export default SkeletonLoader