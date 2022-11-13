import CoursesIcon from "./icons/CoursesHat.svg"
import ServicesIcon from "./icons/Cloud.svg"
import BoxIcon from "./icons/Box.svg"
import BookIcon from "./icons/Book.svg"
import { TopLevelCategory } from "../interfaces/page.interface"
import { firstLevelMenuItem } from "../interfaces/menu.interface"


export const firstLevelMenu: firstLevelMenuItem[] = [
	{ route: "courses", name: "Курсы", icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
	{ route: "services", name: "Сервисы", icon: <ServicesIcon/>, id: TopLevelCategory.Services},
	{ route: "books", name: "Книги", icon: <BookIcon/>, id: TopLevelCategory.Books},
	{ route: "products", name: "Продукты", icon: <BoxIcon/>, id: TopLevelCategory.Products}
]

export const priceValue = (price: number): string => (price * 0.016).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' $')


export const decOfNum = (num: number, titles: [string, string, string]):string => {

	const cases = [2, 0, 1, 1, 1, 2]
	return titles[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]] 
}