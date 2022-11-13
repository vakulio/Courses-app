import React, { useContext } from "react";
import { ThemeButtonProps } from "./ThemeButton.props";
import styles from "./ThemeButton.module.css"
import cn from "classnames";
import SunIcon from "./Sun.svg"
import MoonIcon from "./Moon.svg"
import MyThemeContext from "../../context/theme-context";

export const ThemeButton = ({children, className, ...props}: ThemeButtonProps): JSX.Element => {
    
    
    const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

    function toggleThemeHandler(): void {
        themeCtx.toggleThemeHandler();
    }
    const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem("isDarkTheme")!
      );
    console.log(isDarkTheme)
    return (
        <button
        onClick={toggleThemeHandler}
        className={cn(styles.button, {
            [styles.light] : !isDarkTheme,
            [styles.dark] : isDarkTheme
        })}
        {...props}
        >
            {isDarkTheme ? <span className={styles.sun}><SunIcon/></span> : <span className={styles.moon}><MoonIcon/></span> }
        </button>
    )



}