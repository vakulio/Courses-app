import React, { FunctionComponent, useState, KeyboardEvent, useRef } from "react";
import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import cn from "classnames";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Up } from "../components";

const Layout = ({ children }: LayoutProps): JSX.Element => {

    const [skipLink, setSkipLink] = useState(false);
    const bodyRef = useRef<HTMLDivElement>(null);


    const skipContentAction = (key: KeyboardEvent) => {
		if (key.code == "Space" || key.code == "Enter") {
            key.preventDefault();
			bodyRef.current?.focus();
		}
        setSkipLink(false);
    };
   
    return (
        <div className={styles.wrapper}>
            <a 
            onFocus={() => setSkipLink(true)}
            tabIndex={1} 
            onKeyDown={skipContentAction}
            className={cn(styles.skipLink, {
                [styles.displayed] : skipLink
            })}>К содержанию</a>
            <Header className={styles.header}/>
                <Sidebar className={styles.sidebar}/>
                <div className={styles.body} ref={bodyRef} tabIndex={0}>
                    {children}
                </div>
            <Footer className={styles.footer}/>
            <Up/>
        </div>
     
    );
};


export const withLayout = <T extends Record<string, undefined> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T):JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </AppContextProvider>
        );

    };
};