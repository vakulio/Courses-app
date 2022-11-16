import { Htag, Ptag } from "../components"
import { withLayout } from "../layout/Layout"


export function Error404(): JSX.Element {

	return (
		<>
			<Htag tag="h1">Ошибка 404</Htag>
			<Ptag color="primary">Данной страницы не существует</Ptag>
		</>
	)
}


export default withLayout(Error404)



