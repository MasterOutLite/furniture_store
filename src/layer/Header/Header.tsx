import React from 'react';
import styles from './Header.module.scss';
import clsx from "clsx";
import logo from '../../assets/logo.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export interface HeaderProps {
    title?: string;
    styleClass?: string;
}

function Header({title, styleClass}: HeaderProps) {
    const navigate = useNavigate();

    function goToHome() {
        navigate('/');
    }

    return (
        <header className={clsx(styles.root, styleClass)}>
            <Navbar expand="lg" className={clsx("bg-body-tertiary", styles.root,)}>
                <Container fluid>
                    <Navbar.Brand>{title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className={clsx(styles.nav)}>
                        <Container>
                            <Row xs={1} lg={3} className={"text-center"}>
                                <Col className={clsx('py-3', 'my-auto')}>
                                    <div className={clsx("fs-3", "fw-semibold")}> Меблі від виробника</div>
                                    <div className={'fs-6'}>Працюємо щодня з 10:00 до 20:00</div>
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
    );
}

export default Header;