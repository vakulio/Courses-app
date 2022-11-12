import React from "react";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css"
import cn from "classnames";
import { Menu } from "../Menu/Menu";
import Logo from "../Logo.svg"

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
   
    return (
       <div {...props} className={cn(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo}/>
            <div>Search</div>
            <Menu/>
       </div>
       
    )



}