import React, {ReactNode, useEffect} from 'react';
import {Main} from "./index";
import Entry from "../components/Entry/Entry";
import HelperSelect from "../components/HelperSelect/HelperSelect";
import Info from "../components/Info/Info";
import CallbackContacts from "../components/CallbackContacts/CallbackContacts";
import StaticButton from "../components/StaticButton/StaticButton";

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
            <Info/>
            <StaticButton/>
        </Main>
    );
}

export default StaticLayer;