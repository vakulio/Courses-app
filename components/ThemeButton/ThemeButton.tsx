import React, { useContext, useState } from "react";
import { ThemeButtonProps } from "./ThemeButton.props";
import styles from "./ThemeButton.module.css";
import MyThemeContext from "../../context/theme-context";

export const ThemeButton = ({label}: ThemeButtonProps): JSX.Element => {
    const [checkbox, setCheckbox] = useState(false);
    
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
            onClick={() => {

                setCheckbox(checkbox => !checkbox);
                toggleThemeHandler();
            }}
          className={styles.reactSwitchLabel}
          htmlFor={`react-switch-new`}
          
        >
          <span className={styles.reactSwitchButton} />
        </label>
        </div>
      </>
    );



};