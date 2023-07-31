import React from 'react';
import Container from "react-bootstrap/Container";
import clsx from "clsx";
import Nav from "react-bootstrap/Nav";
import useLanguageStore from "../../store/LanguageStore";

function Info() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate])
    return (
        <Container fluid={"sm"}>

            <div className={clsx('text-center', 'fs-3', 'fw-light', 'pt-5')}>
                <div>{translate.info[language].title}</div>
                <div
                    className={clsx("text-center", 'd-flex', 'flex-column', 'py-4')}>
                    <Nav.Link href={"tel:+38(068)-468-81-76"}>+38(068)-856-23-45</Nav.Link>
                    <Nav.Link href={"tel:+38(068)-468-81-76"}>+38(068)-856-23-45</Nav.Link>
                </div>
                <div className={'pb-5'}>{translate.info[language].work} 10:00 до 20:00</div>
            </div>
        </Container>
    );
}

export default Info;