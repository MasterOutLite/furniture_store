import React, {memo, useEffect, useState} from 'react';
import {Col} from "react-bootstrap";
import styles from "./SelectImg.module.scss";
import clsx from "clsx";
import {KitchenImg} from "src/type";

export interface SelectImgProps {
    id?: number;
    kitchen: KitchenImg;
    select: string;
    setSelect: { type: string, set: any }
}

function Item({kitchen, select, setSelect, id}: SelectImgProps) {
    const [selectItem, setSelectItem] = useState<boolean>(false);

    useEffect(() => {
        if (select === kitchen.title)
            setSelectItem(true);
        else
            setSelectItem(false);

    }, [select, setSelectItem, kitchen])

    return (
        <Col className={styles.itemContainer}
             onClick={() => {
                 setSelectItem(true);
                 setSelect.set({type: setSelect.type, answer: kitchen.title});
             }}
        >
            {selectItem ?
                <div
                    className={clsx(styles.selectItem, 'fs-5', 'fw-semibold')}>✓</div> : null}
            <div className={styles.imgContainer}>
                <img src={kitchen.img} alt={kitchen.title}
                     className={styles.itemImg}/>
            </div>
            <div className={'mt-1'}>{kitchen.title}</div>
        </Col>
    );
}

export default memo(Item);
