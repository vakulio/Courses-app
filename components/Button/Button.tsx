import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css"
import cn from "classnames";
import ArrowIcon from "./Arrow.svg"

export const Button = ({appearence, children, arrow = 'none', className, ...props}: ButtonProps): JSX.Element => {
    
    return (
        <button
        className={cn(styles.button, className, {
            [styles.primary]: appearence == 'primary',
            [styles.ghost]: appearence == 'ghost',
        })}
        {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down',
                [styles.right]: arrow == 'right'
            })}><ArrowIcon/></span> }
        </button>
    )



}