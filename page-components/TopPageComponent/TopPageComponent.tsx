import React from "react"
import { TopPageComponentProps } from "./TopPageComponent.props"
import styles from "./TopPageComponent.module.css"
import cn from "classnames"
import { Advantages, HhData, Htag, Ptag, Tag } from "../../components"
import { TopLevelCategory } from "../../interfaces/page.interface"
import parse from "html-react-parser"

export const TopPageComponent = ({ products, page, firstCategory }: TopPageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag="h1">{page.title}</Htag>
				{products && (
					<Tag color="grey" size="medium">
						{products.length}
					</Tag>
				)}
				<span>Sort</span>
			</div>
			<div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>
			<div className={styles.hhTitle}>
				<Htag tag="h2">Vacancies - {page.category}</Htag>
				{products && (
					<Tag color="red" size="medium">
						hh
					</Tag>
				)}
			</div>
			{firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
			{page.advantages && page.advantages.length > 0 && (
				<>
					<Htag tag="h2">Преимущества</Htag>
					<Advantages advantages={page.advantages} />
				</>
			)}
			{page.seoText && (
				<div className={styles.seoText}>
					{parse(page.seoText)}
				</div>
			)}
			<Htag tag="h2">Получаемые навыки</Htag>
			{page.tags.map((t) => (
				<Tag key={t} color="primary">
					{t}
				</Tag>
			))}
		</div>
	)
}
