import React, { ForwardedRef, forwardRef, useRef, useState } from "react"
import { ProductProps } from "./Product.props"
import styles from "./Product.module.css"
import cn from "classnames"
import { Tag, Card, Rating, Button, Divider, Review, ReviewForm } from "../../components"
import { decOfNum, priceValue } from "../../helpers/helpers"
import Image from "next/image"
import { motion } from "framer-motion"

export const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [isReviewOpened, setReviewOpened] = useState<boolean>(false)
    const reviewRef = useRef<HTMLDivElement>(null)

    const variants = {
        visible: {
            opacity: 1,
            height: 'auto'
        },
        hidden: {
            opacity: 0,
            height: 0
        }
    }

    const scrollToReview = () => {
        setReviewOpened(true)
        reviewRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    }

	return (
		<div className={className} {...props} ref={ref}>
			<Card className={styles.product}>
				<div className={styles.logo}>
					<Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} width={70} height={70} />
				</div>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>
					{priceValue(product.price)} {product.oldPrice && <Tag color="green">{priceValue(product.price - product.oldPrice)}</Tag>}
				</div>
				<div className={styles.credit}>
					{priceValue(product.credit)}/<span className={styles.month}>Месяц</span>
				</div>
				<div className={styles.rating}>
					<Rating rating={product.reviewAvg && product.initialRating}></Rating>
				</div>
				<div className={styles.tags}>
					{product.categories.map((c) => (
						<Tag className={styles.oldPrice} key={c} color="ghost">
							{c}
						</Tag>
					))}
				</div>
				<div className={styles.priceTitle}>Цена</div>
				<div className={styles.creditTitle}>Кредит</div>
				<div className={styles.rateTitle}>
					{product.reviewCount > 0 ? <a href='#ref' onClick={scrollToReview}>{product.reviewCount} {decOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}</a> : <>{product.reviewCount} {decOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}</>}
				</div>
				<Divider className={styles.hr} />
				<div className={styles.description}>{product.description}</div>
				<div className={styles.feature}>
					{product.characteristics.map((c) => (
						<div className={styles.characteristics} key={c.name}>
							<span className={styles.characteristicsName}>{c.name}</span>
							<span className={styles.characteristicsDots}></span>
							<span className={styles.characteristicsValue}>{c.value}</span>
						</div>
					))}
				</div>
				<div className={styles.advBlock}>
					{product.advantages && (
						<div className={styles.advantages}>
							<div>Преимущества</div>
							<div>{product.advantages}</div>
						</div>
					)}
					{product.disadvantages && (
						<div className={styles.disadvantages}>
							<div>Недостатки</div>
							<div>{product.disadvantages}</div>
						</div>
					)}
				</div>
				<Divider className={cn(styles.hr, styles.hr2)} />
				<div className={styles.actions}>
					<Button className={styles.moreButton} appearence="primary">
						Узнать подробнее
					</Button>
					<Button appearence="ghost" arrow={isReviewOpened ? "down" : "right"} onClick={() => setReviewOpened((isReviewOpened) => !isReviewOpened)}>
						Читать отзывы
					</Button>
				</div>
			</Card>
            <motion.div animate={isReviewOpened ? "visible" : "hidden"} variants={variants} initial="hidden">
                <Card
                    color="blue"
                    className={cn(styles.reviews)}
                    ref={reviewRef}
                >
                    {product.reviews.map((r) => (
                        <div key={r._id}>
                            <Review review={r} />
                            <Divider />
                        </div>
                    ))}
                    <ReviewForm productId={product._id} />
                </Card>
            </motion.div>
			
		</div>
	)
}))
