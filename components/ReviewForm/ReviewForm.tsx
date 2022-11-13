import React from "react"
import { ReviewFormProps } from "./ReviewForm.props"
import styles from "./ReviewForm.module.css"
import cn from "classnames"
import { Rating } from "../Rating/Rating"
import { Input } from "../Input/Input"
import { Textarea } from "../Textarea/Textarea"
import { Button } from "../Button/Button"
import CloseSVG from "./Close.svg"
import { useForm, Controller } from "react-hook-form"
import { IReviewForm } from "./ReviewForm.interface"

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit, formState: {errors} } = useForm<IReviewForm>()

    const onSubmit = (data: IReviewForm) => {
        console.log(data)
    }

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input {...register('name', {
                    required: {
                        value: true, 
                        message: "Введите имя"
                    }
                })} 
                placeholder="Имя"
                error={errors.name}
                />
				<Input {...register('title', {
                    required: {
                        value: true, 
                        message: "Введите заголовок"
                    }
                })} 
                placeholder="Заголовок отзыва" 
                className={styles.title}
                error={errors.title} />
				<div>
					<span>Оценка:</span>
                    <Controller 
                    control={control} 
                    name='rating'
                    rules={{
                        required: {
                            value: true, 
                            message: "Укажите рейтинг"
                        }
                    }}
                    render={({ field }) => (
                        <Rating 
                        isEditable 
                        rating={field.value} 
                        ref={field.ref} 
                        error={errors.rating}
                        setRating={field.onChange}/>
                    )}
                    />
					
				</div>
				<Textarea 
                {...register("description", {
                    required: {
                        value: true, 
                        message: "Введите текст"
                    }
                })} 
                error={errors.description}
                placeholder="Текст отзыва" 
                className={styles.description} />
				<div className={styles.submit}>
					<Button appearence="primary">Отправить</Button>
				</div>
			</div>
			<div className={styles.success}>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
				<CloseSVG className={styles.icon} />
			</div>
		</form>
	)
}
