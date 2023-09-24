import React, {useMemo, useState} from 'react';
import styles from './OurWorks.module.scss'

import Container from "react-bootstrap/Container";
import Title from "src/components/Title/Title";
import {KitchenImg} from "src/type";
import {Button, Carousel, Modal, Row} from "react-bootstrap";
import clsx from "clsx";
import useLanguageStore from "src/store/LanguageStore";

export interface OurWorksProps {
    kitchens: KitchenImg[];
    cssImgClass?: string;
}

function OurWorks({kitchens, cssImgClass}: OurWorksProps) {

    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);

    const [step,] = useState<number>(12);
    const [amountImg, setAmountImg] = useState<number>(step);

    const [selectImgIndex, setSelectImgIndex] = useState<number>(0)
    const handleSelect = (selectedIndex: number) => {
        setSelectImgIndex(selectedIndex);
    };

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
                <Title title={translate.ourWorks[language].title}/>
                <Row xs={1} sm={2} md={3} lg={4} className={styles.container}>
                    {photos.map((value, index) => (
                        <div onClick={() => {
                            setSelectImgIndex(index);
                            handleShow();
                        }}
                             style={{maxHeight: '250px'}} key={index} className={styles.imgContainer}>
                            <img src={value.img} alt={value.title}
                                 className={clsx(styles.itemImg, cssImgClass)}/>
                        </div>
                    ))}
                </Row>
                <div className={clsx('d-flex', 'justify-content-center', 'pt-5')}>
                    {isImg() ?
                        <Button onClick={onLoadMore} className={clsx('px-4', 'py-2', 'fs-3')}>
                            {translate.ourWorks[language].btnMore}
                            </Button>
                        :
                        null}

                </div>
            </Container>

            <Modal show={show} onHide={handleClose} fullscreen={true} scrollable={false}>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <Container fluid={"xxl"}>
                        {/*<Image fluid src={selectImg?.img} alt={selectImg?.title}/>*/}
                        <Carousel activeIndex={selectImgIndex} onSelect={handleSelect} interval={null}>
                            {
                                kitchens.map((value, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100 h-100"
                                            src={value.img}
                                            alt={value.title}
                                            style={{maxHeight: '88vh'}}
                                        />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default OurWorks;
