import Layout from "components/layout/Layout"
import { FC } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { store } from "store/store"
import { Provider } from "react-redux"
import ReduxToastr from './ReduxToastr'
import HeadProvider from "./HeadProvider/HeadProvider";
import AuthProvider from "./AuthProvider/AuthProvider"
import { TypeComponentAuthFields } from "@/shared/interfaces/auth.types"


const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToastr />
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider

