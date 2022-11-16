import { AppProps } from "next/dist/shared/lib/router/router"
import "../styles/globals.css"
import Head from "next/head"
import React from "react"
import { MyThemeContextProvider } from "../context/theme-context"
import ym, {YMInitializer} from "react-yandex-metrika"

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {

	router.events.on('routeChangeComplete', (url: string) => {
		if (typeof window !== undefined) {
			ym("hit", url)
		}
	})

	return (
		<>
			<Head>
				<title>Courses - Курсы для себя</title>
				<meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
				<meta property="og:locale" content="ru_RU"/>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link 
                href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" 
                rel="stylesheet"/>
                <link rel="preconnect" href="https://mc.yandex.ru" />
			</Head>
			<YMInitializer
				accounts={[]}
				options={{ webvisor: true, defer: true }}
				version="2"
			/>
			<MyThemeContextProvider>
			<Component {...pageProps} />
			</MyThemeContextProvider>
		</>
	)
}

export default MyApp
