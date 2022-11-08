import { useEffect, useState } from "react"
import { Htag, Button, Ptag, Tag, Rating } from "../components"
import { withLayout } from "../layout/Layout"

function Home(): JSX.Element {

	const [counter, setCounter] = useState(0)
	const [rating, setRating] = useState(2)

	return (
		<>
			<Htag tag="h1">{counter}</Htag>
			<Button appearence="primary" onClick={() => setCounter(counter => counter + 1)}>Plus</Button>
			<Button appearence="ghost" arrow="right">
				ghost
			</Button>
			<Button appearence="primary" arrow="right">
				ghost
			</Button>
			<Ptag>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id inventore culpa maiores mollitia nobis sequi nisi ullam voluptate a velit, veritatis ipsa placeat sunt impedit, aut reiciendis cupiditate, quasi harum?</Ptag>
			<Ptag size="medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id inventore culpa maiores mollitia nobis sequi nisi ullam voluptate a velit, veritatis ipsa placeat sunt impedit, aut reiciendis cupiditate, quasi harum?</Ptag>
			<Ptag size="big">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id inventore culpa maiores mollitia nobis sequi nisi ullam voluptate a velit, veritatis ipsa placeat sunt impedit, aut reiciendis cupiditate, quasi harum?</Ptag>
			<Tag size="small" color="red">
				Small
			</Tag>
			<Tag size="medium" color="primary">
				Small
			</Tag>
			<Tag size="medium">Small</Tag>
			<Tag size="medium">Small</Tag>
			<Rating rating={rating} setRating={setRating} isEditable/>
			<Rating rating={2} />
		</>
	)
}


export default withLayout(Home)