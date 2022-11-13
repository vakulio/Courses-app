import { AppProps } from "next/dist/shared/lib/router/router"
import "../styles/globals.css"
import Head from "next/head"
import React from "react"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Courses - Курсы для себя</title>
			</Head>

			<Component {...pageProps} />
		</>
	)
}

export default MyApp
