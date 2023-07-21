import React, {useState} from 'react';
import styles from './CatalogFurniture.module.scss'
import {Button, Col, Row} from "react-bootstrap";

import {furnitureStyleItems} from "../../helpers/constant";
import Title from "../Title/Title";
import {useNavigate} from "react-router-dom";
import {FurnitureStyle} from "../../type";

function CatalogFurniture() {
    const navigate = useNavigate();

    const [kitchen] = useState<FurnitureStyle[]>(furnitureStyleItems);
//       className={styles.itemList}
    //   className={styles.itemContainer}

    const goTo = (href: string) => {
        navigate(href);
    }

    return (
        <div className={styles.root}>
            <Title title={'Каталог меблів'}/>
            <Row xxl={2} xl={2} lg={2} md={2} sm={1} xs={1} className={styles.itemList}>
                {kitchen.map(value => (
                    <Col key={value.title} className={styles.itemContainer}>
                        <div className={styles.imgContainer}>
                            <img className={styles.itemImg} src={value.img} alt={value.title}/>
                        </div>
                        <div className={styles.titleContainer}>
                            <h4 className={styles.itemTitle}>{value.title}</h4>
                            <h5 className={styles.itemSubTitle}>{value.subTitle}</h5>
                            <Button onClick={() => {
                                goTo(value.hRef);
                            }} className={styles.btn} variant="danger">Перейти →</Button>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default CatalogFurniture;