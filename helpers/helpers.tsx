import CoursesIcon from "./icons/CoursesHat.svg"
import ServicesIcon from "./icons/Cloud.svg"
import BoxIcon from "./icons/Box.svg"
import BookIcon from "./icons/Book.svg"
import { TopLevelCategory } from "../interfaces/page.interface"
import { firstLevelMenuItem } from "../interfaces/menu.interface"


export const firstLevelMenu: firstLevelMenuItem[] = [
	{ route: "courses", name: "Courses", icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
	{ route: "services", name: "Services", icon: <ServicesIcon/>, id: TopLevelCategory.Services},
	{ route: "books", name: "Books", icon: <BookIcon/>, id: TopLevelCategory.Books},
	{ route: "products", name: "Products", icon: <BoxIcon/>, id: TopLevelCategory.Products}
]

export const priceValue = (price: number): string => (price * 0.016).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' $')