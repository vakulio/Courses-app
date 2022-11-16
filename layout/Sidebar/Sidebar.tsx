import React from "react";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import { Menu } from "../Menu/Menu";
import Logo from "../Logo.svg";
import { Search } from "../../components";
import { ThemeButton } from "../../components/ThemeButton/ThemeButton";
import { useRouter } from "next/router";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {

    const router = useRouter();

    const pushToMain = () => {
        router.push("/");
    };
   
    return (
       <div {...props} className={cn(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo} onClick={pushToMain}/>
            <ThemeButton label="День/Ночь"/>
            <Search/>
            <Menu/>
       </div>
       
    );



};