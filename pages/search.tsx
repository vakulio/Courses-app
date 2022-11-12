import { useEffect } from "react"
import { Htag, Button, Ptag, Tag, Rating } from "../components"
import { withLayout } from "../layout/Layout"
import axios from "axios"
import { GetStaticProps, GetStaticPropsContext } from "next"
import { MenuItem } from "../interfaces/menu.interface"
import { ParsedUrlQuery } from "querystring"


interface HomeProps extends Record<string, any> {
	menu: MenuItem[]
	firstCategory: number
}


function Search(): JSX.Element {

	return (
		<>
			ss
		</>
	)
}


export default withLayout(Search)


export const getStaticProps: GetStaticProps<HomeProps> =async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  
	const firstCategory = 0
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
		firstCategory
	} )
	return {
		props: {
			menu,
			firstCategory
		}
	}
}

