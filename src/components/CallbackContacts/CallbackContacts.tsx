import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import WhyWe from "../WhyWe/WhyWe";
import CallBack from "../CallBack/CallBack";
import clsx from "clsx";
import ContactsMessenger from "../ContactsMessenger/ContactsMessenger";
import YouTubeVideos from "../YouTubeVideos/YouTubeVideos";

function CallbackContacts() {
    return (
        <Tabs
            defaultActiveKey="whyWe"
            id="uncontrolled-tab-example"
            className={clsx("mb-3",)}
            fill
        >
            <Tab eventKey="whyWe" title="Чому ми?">
                <WhyWe/>
            </Tab>
            <Tab eventKey="contacts" title="Зв'яжися із нами">
               <ContactsMessenger/>
            </Tab>
            <Tab title={'Відео'} eventKey={'video'}>
                <YouTubeVideos/>
            </Tab>
        </Tabs>
    );
}

export default CallbackContacts;