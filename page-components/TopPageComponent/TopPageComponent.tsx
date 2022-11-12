import React from "react"
import { TopPageComponentProps } from "./TopPageComponent.props"
import styles from "./TopPageComponent.module.css"
import cn from "classnames"
import { Htag, Tag } from "../../components"

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
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
				<Htag tag="h2">Вакансии - {page.category}</Htag>
				{products && (
					<Tag color="red" size="medium">
						hh
					</Tag>
				)}
			</div>
            <div className={styles.hh}>
				<Htag tag="h2">Вакансии - {page.category}</Htag>
				{products && (
					<Tag color="red" size="medium">
						hh
					</Tag>
				)}
			</div>
		</div>
	)
}
