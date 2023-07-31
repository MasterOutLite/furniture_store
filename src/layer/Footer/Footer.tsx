import React from 'react';
import Container from "react-bootstrap/Container";
import clsx from "clsx";
import {Col, Row} from "react-bootstrap";
import useLanguageStore from "../../store/LanguageStore";

function Footer() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate])

    return (
        <Container fluid className={clsx('bg-dark', 'p-3')}>
            <Row className={clsx('text-white-50', 'h-100', 'justify-content-center', 'align-items-center')}>
                <Col className={'text-center'}>
                    <div className={clsx('fs-6', 'fw-semibold', 'text-white')} style={{color: '#47261f'}}>
                        <div>
                            © {translate.footer[language].title} – {new Date().getFullYear()}.
                        </div>
                        <div> {translate.footer[language].security}</div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;