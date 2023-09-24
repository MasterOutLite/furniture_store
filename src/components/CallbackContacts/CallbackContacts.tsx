import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import clsx from "clsx";
import ContactsMessenger from "src/components/ContactsMessenger/ContactsMessenger";
import YouTubeVideos from "src/components/YouTubeVideos/YouTubeVideos";
import useLanguageStore from "src/store/LanguageStore";
import ImageCompare from "src/components/ImageCompare/ImageCompare";

function CallbackContacts() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate])
    return (
        <Tabs
            defaultActiveKey="exampleWork"
            id="uncontrolled-tab-example"
            className={clsx("mb-3", 'mt-5')}
            justify={true}
            fill
        >
            <Tab eventKey="exampleWork" title={translate.callbackContacts[language].exampleWork}>
                <ImageCompare/>
            </Tab>

            <Tab eventKey="contacts" title={translate.callbackContacts[language].contacts} >
                <ContactsMessenger/>
            </Tab>

            <Tab eventKey='video' title={translate.callbackContacts[language].video}>
                <YouTubeVideos/>
            </Tab>
        </Tabs>
    );
}

export default CallbackContacts;
