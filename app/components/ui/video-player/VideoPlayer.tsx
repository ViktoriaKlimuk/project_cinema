import { FC } from 'react'
import styles from './VideoPlayer.module.scss'
import { IVideoPlayer } from './video.interface'
import { useVideo } from './useVideo'
import cn from 'classnames'
import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import { BsFullscreen } from "react-icons/bs";
import { GrBackTen } from "react-icons/gr";
import { GrForwardTen } from "react-icons/gr";
import { GrPlay } from "react-icons/gr";
import { GiPauseButton } from "react-icons/gi";
import { useAuth } from '../../../hooks/useAuth'

const VideoPlayer: FC<IVideoPlayer> = ({ slug, videoSource }) => {

	const { actions, video, videoRef } = useVideo()

	const { user } = useAuth()

	return (
		<div className={styles.wrapper}>
			{user ? (
				<>
					<video
						ref={videoRef}
						className={styles.video}
						// src={`${videoSource}#t=8`}
						src={videoSource}
						preload='metadata'
					/>

					<div className={styles.progressBarContainer}>
						<div style={{ width: `${video.progress}%` }} className={styles.progressBar} />
					</div>

					<div className={styles.controls}>
						<div className={styles.leftSide}>
							<button onClick={actions.revert}>
								<GrBackTen />
							</button>

							<button onClick={actions.toggleVideo}>
								{video.isPlaying ? <GiPauseButton /> : <GrPlay />}
							</button>

							<button onClick={actions.forward}>
								<GrForwardTen />
							</button>

							<div className={styles.timeControls}>
								<p className={styles.controlsTime}>
									{Math.floor(video.currentTime / 60) +
										':' +
										('0' + Math.floor(video.currentTime % 60)).slice(-2)}
								</p>
								<p> / </p>
								<p className={styles.controlsTime}>
									{Math.floor(video.videoTime / 60) +
										':' +
										('0' + Math.floor(video.videoTime % 60)).slice(-2)}
								</p>
							</div>
						</div>


						<div className={styles.rightSide}>
							<button onClick={actions.fullScreen}>
								<BsFullscreen />
							</button>
						</div>
					</div>
				</>
			) : (<AuthPlaceholder slug={slug} />)}
		</div>
	)
}

export default VideoPlayer