import { useEffect, useState } from "react"
import { Htag, Button, Ptag, Tag, Rating } from "../components"
import { withLayout } from "../layout/Layout"
import axios from "axios"
import { GetStaticProps } from "next"
import { MenuItem } from "../interfaces/menu.interface"
import { API } from "../helpers/api"

interface HomeProps extends Record<string, any> {
	menu: MenuItem[]
	firstCategory: number
}

function Home({ menu }:HomeProps): JSX.Element {
	const [count, setCount] = useState(1)

	return (
		<>
			{/* <Rating rating={0} isEditable setRating={setCount}/> */}
		</>
	)
}


export default withLayout(Home)


export const getStaticProps: GetStaticProps<HomeProps> =async () => {
	const firstCategory = 0
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	} )
	return {
		props: {
			menu,
			firstCategory
		}
	}
}

