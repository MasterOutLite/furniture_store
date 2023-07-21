import React, {useEffect, useMemo, useState} from 'react';
import styles from './OurWorks.module.scss'

import Container from "react-bootstrap/Container";
import Title from "../Title/Title";
import {KitchenImg} from "../../type";
import {Button, Image, Modal, Row} from "react-bootstrap";
import clsx from "clsx";

export interface OurWorksProps {
    kitchens: KitchenImg[];
    cssImgClass?: string;
}

function OurWorks({kitchens, cssImgClass}: OurWorksProps) {

    const [step,] = useState<number>(12);
    const [amountImg, setAmountImg] = useState<number>(step);

    const [selectImg, setSelectImg] = useState<KitchenImg>()

    const isImg = () => amountImg < kitchens.length;

    function loadMore(number: number) {
        let amount = amountImg + number;
        const checkAmount = amount - kitchens.length
        if (checkAmount > 0)
            amount -= checkAmount
        setAmountImg(amount)
    }

    function onLoadMore() {
        loadMore(step);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const photos = useMemo(() => {
        const photo = kitchens.filter((value, index) => index < amountImg);
        return photo;
    }, [kitchens, amountImg])

    return (
        <>
            <Container fluid>
                <Title title={'Наші роботи'}/>
                <Row xs={1} sm={2} md={3} lg={4} className={styles.container}>
                    {photos.map((value, index) => (
                        <div onClick={() => {
                            setSelectImg(value);
                            handleShow();
                        }}
                             style={{maxHeight: '250px'}} key={value.img} className={styles.imgContainer}>
                            <img src={value.img} alt={value.title}
                                 className={clsx(styles.itemImg, cssImgClass)}/>
                        </div>
                    ))}
                </Row>
                <div className={clsx('d-flex', 'justify-content-center', 'pt-5')}>
                    {isImg() ?
                        <Button onClick={onLoadMore} className={clsx('px-4', 'py-2', 'fs-3', styles.btn)}>Завантажити ще</Button>
                        :
                        null}

                </div>
            </Container>

            <Modal show={show} onHide={handleClose} size={"xl"}>
                <Modal.Header closeButton/>
                <Modal.Body className={clsx('d-flex', 'justify-content-center')}>
                    <Image fluid src={selectImg?.img} alt={selectImg?.title}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default OurWorks;