import React from 'react';
import Container from "react-bootstrap/Container";
import clsx from "clsx";
import Nav from "react-bootstrap/Nav";
import useLanguageStore from "src/store/LanguageStore";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Info() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate])
    const navigate = useNavigate();

    function goToLegalDocuments() {
        navigate('/LegalDocuments');
    }

    return (
        <Container fluid={"sm"}>

            <div className={clsx('text-center', 'fs-3', 'fw-light', 'pt-5')}>
                <div>{translate.info[language].title}</div>

                <Button className={'fs-5'} variant="outline-info" onClick={goToLegalDocuments}>
                    {translate.info[language].legalDocuments}
                </Button>
                <div
                    className={clsx("text-center", 'd-flex', 'flex-column', 'py-4')}>
                    <Nav.Link href={"tel:+38(068)-468-81-76"}>+38(068)-856-23-45</Nav.Link>
                    <Nav.Link href={"tel:+38(068)-468-81-76"}>+38(068)-856-23-45</Nav.Link>
                </div>
                <div className={'pb-5'}>{translate.info[language].work}</div>
            </div>
        </Container>
    );
}

export default Info;
