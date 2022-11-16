import React, { useEffect, useReducer } from "react";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { Advantages, HhData, Htag, Product, Sort, Tag } from "../../components";
import { TopLevelCategory } from "../../interfaces/page.interface";
import parse from "html-react-parser";
import { SortEnum } from "../../components/Sort/Sort.props";
import { sortReducer } from "./sort.reducer";

export const TopPageComponent = ({ products, page, firstCategory }: TopPageComponentProps): JSX.Element => {

	const [{ products: sortedProducts, sort}, dispathSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});


	const setSort = (sort: SortEnum) => {
		dispathSort({type: sort});
	};


	useEffect(() => {
		dispathSort({type: "reset", initialState: products});
	}, [products]);


	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag="h1">{page.title}</Htag>
				{products && (
					<Tag color="grey" size="medium">
						{products.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={setSort}/>
			</div>
			<div>
				{sortedProducts && products.map((p) => <Product layout product={p} key={p._id}/>)}
				</div>
			<div className={styles.hhTitle}>
				<Htag tag="h2">Вакансии - {page.category}</Htag>
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
	);
};
