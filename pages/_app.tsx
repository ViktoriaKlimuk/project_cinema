// import '../app/assets/styles/globals.scss'
import '../styles/globals.scss';
import type { AppProps } from "next/app";
import { TypeComponentAuthFields } from '@/shared/interfaces/auth.types';
import MainProvider from "providers/MainProvider";

type TypeAppProps = AppProps & TypeComponentAuthFields

const App = ({ Component, pageProps }: TypeAppProps) => {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
export default App