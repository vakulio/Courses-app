import { AppProps } from "next/dist/shared/lib/router/router"
import "../styles/globals.css"
import Head from "next/head"
import React from "react"
import { MyThemeContextProvider } from "../context/theme-context"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Courses - Курсы для себя</title>
			</Head>
			<MyThemeContextProvider>
			<Component {...pageProps} />
			</MyThemeContextProvider>
		</>
	)
}

export default MyApp
