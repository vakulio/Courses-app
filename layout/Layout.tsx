import React, { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css"
import cn from "classnames";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";

const Layout = ({ children }: LayoutProps): JSX.Element => {
   
    return (
        <>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
     
    )
}


export const withLayout = <T extends Record<string, undefined>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T):JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        )

    }
}