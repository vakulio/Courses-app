import React, {useState, useEffect, KeyboardEvent} from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css"
import cn from "classnames";
import StarIcon from './Star.svg'

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
   const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

   useEffect(() => {
    constructRating(rating)
   }, [rating])

   const constructRating = (currentRating: number) => {
    const updatedArr = ratingArr.map((r: JSX.Element, i: number) => {
        return (
            <StarIcon className={cn(styles.star, {
                [styles.filled]: i < currentRating,
                [styles.editable]: isEditable
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClickChange(i + 1)}
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e:KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
            />
        )
    })
    setRatingArr(updatedArr)
   }

   const changeDisplay = (i: number) => {
    if (!isEditable) {
        return
    }
    constructRating(i)
   }

   
   const onClickChange = (i: number) => {
    if (!isEditable || !setRating) {
        return
    }
    setRating(i)
   }

   const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
    if(e.code != "Space" || !setRating) {
        return
    }
    setRating(i)
   }


    return (
      <div {...props}>
        {ratingArr.map((r, i) => (<span key={i}>{r}</span>))}
      </div>
    )



}