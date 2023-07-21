import React, {useState} from 'react';
import styles from './WhyWe.module.scss'
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CallBack from "../CallBack/CallBack";
import clsx from "clsx";

function WhyWe() {
    const [why] = useState([
        'укладаємо офіційний договір;', 'виїзд + замір + розробка індивідуального дизайну лише за 200 грн*;',
        'стильний дизайн поєднується зі 100% функціональністю;', 'гарантія 12 місяців на самі меблі та до 25 років на фурнітуру;',
        'монтаж у день доставки.',
    ]);

    return (
        <div className={styles.wrapper}>
            <Container className={styles.root} fluid={"xxl"}>
                <Row className={clsx('align-items-center', styles.reasons)} lg={2} xs={1}>
                    <Col>
                        <div className={styles.reasonsWrapper}>
                            <h5 className={styles.title}>ТОП 5 причин - чому варто замовити у нас?</h5>
                            <Row className={styles.reasonsContainer}>
                                {why.map((value, index) => (
                                    <Col key={index} className={styles.reasonsItem}>
                                        <div className={styles.index}>{index + 1}</div>
                                        <div className={styles.reasonsDescription}>{value}</div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <CallBack cssClass={'m-auto'}/>
                    </Col>
                </Row>
                <div className={clsx(styles.note,'fs-5')}>
                    * При замовленні меблів виїзд + замір + розробка дизайну БЕЗКОШТОВНО. Ви оплачуєте лише вартість
                    замовлених меблів.
                </div>
            </Container>
        </div>
    );
}

export default WhyWe;