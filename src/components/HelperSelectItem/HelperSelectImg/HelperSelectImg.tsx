import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import styles from "./HelperSelectImg.module.scss";
import clsx from "clsx";
import {Answer, KitchenImg} from "../../../type";

export interface SelectImgProps {
    type: string;
    show: KitchenImg[];
    getSelect: (type: string) => string;
    setSelect: (value: Answer) => void;
}

function HelperSelectImg({show, getSelect, setSelect, type}: SelectImgProps) {
    const [selectItem, setSelectItem] = useState<number>(-1);

    function setSelectElement(index: number, answer: string) {
        setSelectItem(index);
        setSelect({type, answer});
    }

    useEffect(() => {
        setSelectItem(-1);
        show.map((value, index) => {
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
                            <img src={value.img} alt={value.title}
                                 className={styles.itemImg}/>
                        </div>
                        <div className={'mt-1'}>{value.title}</div>
                    </Col>
                ))
            }
        </Row>

    );
}

export default HelperSelectImg;