import React, { useEffect, useState } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import { ButtonIcon } from "../../components";
import Logo from "../Logo.svg";
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useRouter } from "next/router";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

    const router = useRouter();

    const [open, setOpen] = useState<boolean>(false);


    useEffect(() => {
        setOpen(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20,
            }
        },
        closed: {
            opacity: 0,
            x: '100%'
        }
    };

    return (
       <header className={cn(className, styles.header)} {...props}>
            <Logo/>
            <ButtonIcon appearence="white" icon="menu" onClick={() => setOpen(true)}/>
            <motion.div 
            variants={variants}
            initial="closed"
            animate={open ? "opened" : "closed"}
            className={styles.mobileMenu}>
                <Sidebar/>
                <ButtonIcon className={styles.close} appearence="white" icon="close" onClick={() => setOpen(false)}/>
            </motion.div>
       </header>
       
    );



};