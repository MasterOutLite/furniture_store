import React, {ReactNode, useEffect} from 'react';
import {Main} from "./index";
import Entry from "src/components/Entry/Entry";
import HelperSelect from "src/components/HelperSelect/HelperSelect";
import Info from "src/components/Info/Info";
import CallbackContacts from "src/components/CallbackContacts/CallbackContacts";
import StaticButton from "src/components/StaticButton/StaticButton";

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
            {/*<Message/>*/}
            <StaticButton/>
        </Main>
    );
}

export default StaticLayer;
