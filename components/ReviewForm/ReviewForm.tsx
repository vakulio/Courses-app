import React, { useState } from "react";
import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseSVG from "./Close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponce } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";

export const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit, formState: {errors}, reset } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSentResponce>(API.review.createDemo, {...formData, productId});
            if  (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError("Что-то не так");
            }
        } catch (error) {
            setError(error.message);
        }
       
    };

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
                tabIndex={isOpened ? 0 : -1}
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
                tabIndex={isOpened ? 0 : -1}
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
                className={styles.description}
                tabIndex={isOpened ? 0 : -1} />
				<div className={styles.submit}>
					<Button appearence="primary">Отправить</Button>
				</div>
			</div>
			{isSuccess && <div className={styles.success}>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
				<CloseSVG className={styles.icon} onClick={() => setIsSuccess(false)}/>
			</div>}
            {isError && <div className={styles.error}>
                "Что-то не так. Попробуйте снова."
				<CloseSVG className={cn(styles.iconError, styles.icon)} onClick={() => setError(undefined)}/>
			</div>}
		</form>
	);
};
