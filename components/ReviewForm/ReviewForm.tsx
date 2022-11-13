import React from "react";
import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css"
import cn from "classnames";
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseSVG from "./Close.svg"

export const ReviewForm = ({ productId, className, ...props}: ReviewFormProps): JSX.Element => {
    
    return (
        <>
        <div className={cn(styles.reviewForm, className)} {...props}>
           <Input placeholder="Имя"/>
           <Input placeholder="Заголовок отзыва" className={styles.title}/>
           <div>
                <span>Оценка:</span>
                <Rating rating={0}/>
           </div>
           <Textarea placeholder="Текст отзыва" className={styles.description}/>
           <div className={styles.submit}>
                <Button appearence="primary">Отправить</Button>
           </div>
        </div>
        <div className={styles.success}>
            <div className={styles.successTitle}>Ваш отзыв отправлен</div>
            <div>
                Спасибо, ваш отзыв будет опубликован после проверки.
            </div>
            <CloseSVG className={styles.icon}/>
        </div>
        </>
    )



}