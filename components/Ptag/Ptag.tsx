import React from "react";
import { PtagProps } from "./Ptag.props";
import styles from "./Ptag.module.css";
import cn from "classnames";

export const Ptag = ({size = 'small', children}: PtagProps): JSX.Element => {
   
    return (
        <p className={cn( styles.p ,{
            [styles.small]: size == 'small',
            [styles.medium]: size == 'medium',
            [styles.big]: size == 'big',
        })}>{children}</p>
    );



};