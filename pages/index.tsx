import { Htag, Ptag, Tag } from "../components"
import { withLayout } from "../layout/Layout"




function Home(): JSX.Element {

	return (
		<>
			<Htag tag="h1">Это тестовый проект на Next.js</Htag>
			<Ptag color="primary">Вы можете ознакомиться с ним в моем Github репозитории Vakulio</Ptag>
			<Tag color="red">Vakula Vladimir</Tag>
		</>
	)
}


export default withLayout(Home)


