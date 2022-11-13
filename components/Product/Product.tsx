import React, { useState } from "react";
import { ProductProps } from "./Product.props";
import styles from "./Product.module.css"
import cn from "classnames";
import { Tag, Card, Rating, Button, Divider, Review, ReviewForm } from "../../components";
import { decOfNum, priceValue } from "../../helpers/helpers";
import Image from "next/image";

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {

    const [isReviewOpened, setReviewOpened] = useState<boolean>(false)
   
    return (
       <>
       <Card className={styles.product}>
            <div className={styles.logo}>
                <Image 
                src={process.env.NEXT_PUBLIC_DOMAIN + product.image} 
                alt={product.title} 
                width={70} 
                height={70}
                /></div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>{priceValue(product.price)} {product.oldPrice && <Tag color="green">{priceValue(product.price - product.oldPrice)}</Tag>}</div>
            <div className={styles.credit}>{priceValue(product.credit)}/<span className={styles.month}>Месяц</span></div>
            <div className={styles.rating}><Rating rating={product.reviewAvg && product.initialRating}></Rating></div>
            <div className={styles.tags}>{product.categories.map(c => <Tag className={styles.oldPrice} key={c} color="ghost">{c}</Tag>)}</div>
            <div className={styles.priceTitle}>Цена</div>
            <div className={styles.creditTitle}>Кредит</div>
            <div className={styles.rateTitle}>{product.reviewCount} {decOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
            <Divider className={styles.hr}/>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>{
                product.characteristics.map(c => (
                    <div className={styles.characteristics} key={c.name}>
                        <span className={styles.characteristicsName}>{c.name}</span>
                        <span className={styles.characteristicsDots}></span>
                        <span className={styles.characteristicsValue}>{c.value}</span>
                    </div>
                ))
            }</div>
            <div className={styles.advBlock}>
                {product.advantages && <div className={styles.advantages}>
                    <div>Преимущества</div>
                    <div>{product.advantages}</div>
                </div>}
                {product.disadvantages && <div className={styles.disadvantages}>
                    <div>Недостатки</div>
                    <div>{product.disadvantages}</div>
                </div>}
            </div>
            <Divider className={cn(styles.hr, styles.hr2)}/>
            <div className={styles.actions}>
                <Button className={styles.moreButton} appearence="primary">Узнать подробнее</Button>
                <Button appearence="ghost" arrow={isReviewOpened ? 'down' : 'right'} onClick={() => setReviewOpened(isReviewOpened => !isReviewOpened)}>Читать отзывы</Button>
            </div>
       </Card>
       <Card color="blue" className={cn(styles.reviews, {
            [styles.opened] : isReviewOpened,
            [styles.closed] : !isReviewOpened
       })}>
        {product.reviews.map(r => (
            <>
            <Review key={r._id} review={r}/>
            <Divider/>
            </>
        ))}
        <ReviewForm productId={product._id}/>
       </Card>
       </>
    )



}