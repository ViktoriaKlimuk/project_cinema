import { FC } from "react"
import NextProgressBar from 'nextjs-progressbar';
import FavIcons from "./FavIcons";
import Head from "next/head";
import { accentColor } from "../../config/constants";

const HeadProvider: FC = ({ children }) => {
	return (
		<>
			<NextProgressBar
				color={accentColor}
				startPosition={0.5}
				stopDelayMs={200}
				height={5}

			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

				<FavIcons />

				<meta name="theme-color" content={'#130B2B'} />
				<meta name="msapplication-navbutton-color" content={'#130B2B'} />
				<meta name="apple-mobile-web-app-status-bar-style" content={'#130B2B'} />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			{children}
		</>
	)
}
export default HeadProvider