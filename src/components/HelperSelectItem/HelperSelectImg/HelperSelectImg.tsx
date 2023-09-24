import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import styles from "./HelperSelectImg.module.scss";
import clsx from "clsx";
import {Answer, KitchenImgWithTranslate} from "src/type";
import useLanguageStore from "src/store/LanguageStore";

export interface SelectImgProps {
    type: string;
    show: KitchenImgWithTranslate[];
    getSelect: (type: string) => string;
    setSelect: (value: Answer) => void;
}

function HelperSelectImg({show, getSelect, setSelect, type}: SelectImgProps) {
    const [language] = useLanguageStore(state => [state.language, state.translate]);

    const [selectItem, setSelectItem] = useState<number>(-1);

    function setSelectElement(index: number, answer: string) {
        setSelectItem(index);
        setSelect({type, answer});
    }

    useEffect(() => {
        setSelectItem(-1);
        show.forEach((value, index) => {
            if (value.title === getSelect(type))
                setSelectItem(index);
        })
    }, [getSelect, show, type]);

    return (
        <Row lg={4} sm={3} xs={2}>
            {
                show.map((value, index) => (
                    <Col key={index} className={styles.itemContainer}
                         onClick={() => {
                             setSelectElement(index, value.title)
                         }}
                    >
                        {selectItem === index ?
                            <div
                                className={clsx(styles.selectItem, 'fs-5', 'fw-semibold')}>✓</div>
                            : null
                        }
                        <div className={styles.imgContainer}>
                            <img src={value.img} alt={value.translate[language].title}
                                 className={styles.itemImg}/>
                        </div>
                        <div className={'mt-1'}>{value.translate[language].title}</div>
                    </Col>
                ))
            }
        </Row>

    );
}

export default HelperSelectImg;
