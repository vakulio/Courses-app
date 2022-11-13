import { useEffect } from "react"
// import { Htag, Button, Ptag, Tag, Rating } from "../components"
import { withLayout } from "../../layout/Layout"
import axios from "axios"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import { MenuItem } from "../../interfaces/menu.interface"
import { firstLevelMenu } from "../../helpers/helpers"
import { ParsedUrlQuery } from "querystring"
import { API } from "../../helpers/api"


interface TypeProps extends Record<string, any> {
	menu: MenuItem[]
	firstCategory: number
}

function Type({ firstCategory }: TypeProps): JSX.Element {

	return (
		<>
			Type {firstCategory}
		</>
	)
}


export default withLayout(Type)


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(m => '/' + m.route),
        fallback: true
    }
}


export const getStaticProps: GetStaticProps<TypeProps> =async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        }
    }
    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type)
	if (!firstCategoryItem) {
		return {
			notFound: true
		}
	}
	const firstCategory = 0
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory: firstCategoryItem.id
	} )
	return {
		props: {
			menu,
			firstCategory: firstCategoryItem.id
		}
	}
}

