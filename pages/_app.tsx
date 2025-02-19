// import '../app/assets/styles/globals.scss'
import '../styles/globals.scss';
import type { AppProps } from "next/app";
import MainProvider from '../app/providers/MainProvider';
import { TypeComponentAuthFields } from '../app/shared/interfaces/auth.types';

type TypeAppProps = AppProps & TypeComponentAuthFields

const App = ({ Component, pageProps }: TypeAppProps) => {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
export default App