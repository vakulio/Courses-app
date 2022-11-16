import React from "react";
import { ButtonIconProps, icons } from "./ButtonIcon.props";
import styles from "./ButtonIcon.module.css";
import cn from "classnames";

export const ButtonIcon = ({appearence, icon, className, ...props}: ButtonIconProps): JSX.Element => {
    const IconComp = icons[icon]; 
    
    return (
        <button
        className={cn(styles.button, className, {
            [styles.primary]: appearence == 'primary',
            [styles.white]: appearence == 'white',
        })}
        {...props}
        >
            <IconComp/>
        </button>
    );



};