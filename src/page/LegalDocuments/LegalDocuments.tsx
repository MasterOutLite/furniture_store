import React from 'react';
import {Main} from "src/layer";
import ContactsMessenger from "src/components/ContactsMessenger/ContactsMessenger";
import {Image, Row} from "react-bootstrap";
import img from 'src/assets/wardrobe-classicka.jpg'
import Container from "react-bootstrap/Container";

function LegalDocuments() {
    return (
        <Main>
            <Container fluid={'xxl'} >
                <Row className={'py-5'} xl={2}>
                    <div>
                        <Image fluid src={img}/>
                    </div>
                </Row>
            </Container>
            <div className={'p-5'}>
                <ContactsMessenger/>
            </div>
        </Main>
    );
}

export default LegalDocuments;
