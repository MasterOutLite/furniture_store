import React from 'react';
import Container from "react-bootstrap/Container";
import clsx from "clsx";
import {Col, Row} from "react-bootstrap";

function Footer() {
    return (
        <Container fluid className={clsx('bg-dark', 'p-3')} >
            <Row className={clsx('text-white-50', 'h-100', 'justify-content-center', 'align-items-center')}>
                <Col className={'text-center'} >
                    <div className={clsx('fs-6', 'fw-semibold', 'text-white')} style={{color: '#47261f'}}>
                        <div>
                            © Меблева фабрика Verona – {new Date().getFullYear()}.
                        </div>
                        <div> Всі права захищені.</div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;