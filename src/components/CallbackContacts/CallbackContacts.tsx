import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import clsx from "clsx";
import ContactsMessenger from "../ContactsMessenger/ContactsMessenger";
import YouTubeVideos from "../YouTubeVideos/YouTubeVideos";
import useLanguageStore from "../../store/LanguageStore";
import ImageCompare from "../BeforeAndAfterComparison/ImageCompare";

function CallbackContacts() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate])
    return (
        <Tabs
            defaultActiveKey="exampleWork"
            id="uncontrolled-tab-example"
            className={clsx("mb-3", 'mt-5')}
            fill
        >
            {/*<Tab eventKey="whyWe" title={translate.callbackContacts[language].whyWe}>*/}
            {/*    <WhyWe/>*/}
            {/*</Tab>*/}

            <Tab eventKey="exampleWork" title={translate.callbackContacts[language].exampleWork}>
                <ImageCompare/>
            </Tab>

            <Tab eventKey="contacts" title={translate.callbackContacts[language].contacts}>
                <ContactsMessenger/>
            </Tab>

            <Tab eventKey='video' title={translate.callbackContacts[language].video}>
                <YouTubeVideos/>
            </Tab>
        </Tabs>
    );
}

export default CallbackContacts;