import React, {useState} from 'react';
import styles from './CatalogFurniture.module.scss'
import {Button, Col, Row} from "react-bootstrap";

import {furnitureStyleItems} from "src/helpers/constant";
import Title from "src/components/Title/Title";
import {useNavigate} from "react-router-dom";
import {FurnitureStyle} from "src/type";
import useLanguageStore from "src/store/LanguageStore";

function CatalogFurniture() {
    const navigate = useNavigate();

    const [language, translate] = useLanguageStore(state => [state.language, state.translate])
    const [kitchen] = useState<FurnitureStyle[]>(furnitureStyleItems);

    const goTo = (href: string) => {
        navigate(href);
    }

    return (
        <div className={styles.root}>
            <Title title={translate.catalogFurniture[language].title}/>
            <Row xxl={2} xl={2} lg={2} md={2} sm={1} xs={1} className={styles.itemList}>
                {kitchen.map(value => (
                    <Col key={value.hRef} className={styles.itemContainer}>
                        <div className={styles.imgContainer}>
                            <img className={styles.itemImg} src={value.img} alt={value.title[language]}/>
                        </div>
                        <div className={styles.titleContainer}>
                            <h4 className={styles.itemTitle}>{value.title[language]}</h4>
                            <h5 className={styles.itemSubTitle}>{value.subTitle[language]}</h5>
                            <Button onClick={() => {
                                goTo(value.hRef);
                            }} className={styles.btn} variant="danger">{translate.catalogFurniture[language].btnGo} →</Button>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default CatalogFurniture;
