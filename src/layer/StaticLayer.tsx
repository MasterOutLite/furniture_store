import React, {ReactNode, useEffect} from 'react';
import {Main} from "./index";
import Entry from "../components/Entry/Entry";
import HelperSelect from "../components/HelperSelect/HelperSelect";
import Advantages from "../components/Advantages/Advantages";
import WhyWe from "../components/WhyWe/WhyWe";
import Info from "../components/Info/Info";
import CallbackContacts from "../components/CallbackContacts/CallbackContacts";

export interface StaticLayerProps {
    children?: ReactNode;
    previewTitle: string;
    previewTitleChildren?: ReactNode;
    previewImg?: string;
}

function StaticLayer({children, previewImg, previewTitle, previewTitleChildren}: StaticLayerProps) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Main>
            <Entry img={previewImg} children={previewTitleChildren} title={previewTitle}/>
            <HelperSelect/>
            {children}
            <CallbackContacts/>
            {/*<WhyWe/>*/}
            <Info/>
        </Main>
    );
}

export default StaticLayer;