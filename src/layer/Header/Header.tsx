import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss';
import clsx from "clsx";
import logo from '../../assets/logo.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ButtonGroup, Col, Row, ToggleButton} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {Language} from "../../type";
import useLanguageStore from "../../store/LanguageStore";

export interface HeaderProps {
    title?: string;
    styleClass?: string;
}

function Header({title, styleClass}: HeaderProps) {

    const navigate = useNavigate();
    const [language, setLanguage, translate] = useLanguageStore(state => [state.language, state.setLanguage, state.translate])
    const [radioValue, setRadioValue] = useState<Language>(language);
    function goToHome() {
        navigate('/');
    }

    useEffect(() => {
        setLanguage(radioValue);
    }, [radioValue, setLanguage]);

    return (
        <header className={clsx(styles.root, styleClass)}>
            <Navbar expand="lg" className={clsx("bg-body-tertiary", styles.root,)}>
                <Container fluid>
                    <Navbar.Brand>{title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className={clsx(styles.nav)}>
                        <Container>
                            <div className={clsx('d-flex', 'justify-content-end', styles.language)}>
                                <ButtonGroup>
                                    <ToggleButton
                                        id={`radio-ua`}
                                        type="radio"
                                        variant='outline-success'
                                        name="radio"
                                        value={Language.ua}
                                        checked={radioValue === Language.ua}
                                        onChange={(e) => setRadioValue(Language.ua)}
                                    >
                                        UA
                                    </ToggleButton>
                                    <ToggleButton
                                        id={`radio-de`}
                                        type="radio"
                                        variant='outline-primary'
                                        name="radio"
                                        value={Language.de}
                                        checked={radioValue === Language.de}
                                        onChange={(e) => setRadioValue(Language.de)}
                                    >
                                        DE
                                    </ToggleButton>
                                    <ToggleButton
                                        id={`radio-en`}
                                        type="radio"
                                        variant='outline-danger'
                                        name="radio"
                                        value={Language.ru}
                                        checked={radioValue === Language.ru}
                                        onChange={(e) => setRadioValue(Language.ru)}
                                    >
                                        RU
                                    </ToggleButton>
                                </ButtonGroup>
                            </div>
                            <Row xs={1} lg={3} className={"text-center"}>
                                <Col className={clsx('py-3', 'my-auto')}>
                                    <div
                                        className={clsx("fs-3", "fw-semibold")}>{translate.header[radioValue].from}</div>
                                    <div className={'fs-6'}>{translate.header[radioValue].work}</div>
                                </Col>
                                <Col className={clsx('py-3', 'my-auto')}>
                                    <Nav.Link className={'fs-1'} onClick={goToHome}>
                                        <img src={logo} alt={'logo'} className={styles.img}/>
                                    </Nav.Link>
                                </Col>
                                <Col className={clsx('py-3', 'my-auto')}>
                                    <Nav.Link className={'fs-5'}
                                              href={"tel:+38(068)-468-81-76"}>+38(068)-856-23-45</Nav.Link>
                                    <Nav.Link className={'fs-5'}
                                              href={"tel:+38(068)-468-81-76"}>+38(068)-856-23-45</Nav.Link>
                                </Col>
                            </Row>
                        </Container>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
        ;
}

export default Header;