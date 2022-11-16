import React, { useContext, useState } from "react";
import { ThemeButtonProps } from "./ThemeButton.props";
import styles from "./ThemeButton.module.css"
import cn from "classnames";
import SunIcon from "./Sun.svg"
import MoonIcon from "./Moon.svg"
import MyThemeContext from "../../context/theme-context";

export const ThemeButton = ({children, className, label,  ...props}: ThemeButtonProps): JSX.Element => {
    const [checkbox, setCheckbox] = useState(false)
    
    const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

    function toggleThemeHandler(): void {
        themeCtx.toggleThemeHandler();
    }
   
    return (
        <>
        <div>
            <span className={styles.text}>{label}</span>
        <input
            checked={checkbox}
          className={styles.reactSwitchCheckbox}
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
            onClick={(checkbox) => {
                setCheckbox(checkbox => !checkbox)
                toggleThemeHandler()
            }}
          className={styles.reactSwitchLabel}
          htmlFor={`react-switch-new`}
          
        >
          <span className={styles.reactSwitchButton} />
        </label>
        </div>
      </>
    )



}