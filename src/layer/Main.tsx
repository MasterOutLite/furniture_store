import React, {ReactNode} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import clsx from "clsx";

export interface MainProps {
    title?: string;
    headerClass?: string;
    mainClass?: string;
    footerClass?: string;
    children?: ReactNode;
}

function Main({title, headerClass, mainClass, footerClass, children}: MainProps) {
    return (
        <div className={clsx('d-flex', 'flex-column', 'vh-100')}>
            <Header/>
            <div className={clsx('flex-grow-1', mainClass)} style={{backgroundColor: '#fafafa'}}>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Main;