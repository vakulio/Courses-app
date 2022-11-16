import { Htag, Ptag } from "../components"
import { withLayout } from "../layout/Layout"



function Error500(): JSX.Element {

	return (
		<>
			<Htag tag="h1">Ошибка 500</Htag>
			<Ptag color="red">Данной страницы не существует</Ptag>
		</>
	)
}


export default withLayout(Error500)



