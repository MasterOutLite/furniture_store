import React, {memo, useState} from 'react';
import clsx from "clsx";
import styles from "./HelperSelect.module.scss";
import {Button, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

import {
    kitchenLayoutSelect,
    kitchenMaterialSelect,
    kitchenStyleSelect,
    sizeKitchen,
    typeTableTopSelect,
    urlCallBack,
    whenNeededKitchen
} from 'src/helpers/constant'
import {Answer, HelperSelectType, VariantBg} from "src/type";
import callBackInfo from "src/helpers/constants/CallBackInfo";
import {isPhoneNumber} from "src/helpers/check";
import HelperSelectImg from "src/components/HelperSelectItem/HelperSelectImg/HelperSelectImg";
import HelperQuestions from "src/components/HelperSelectItem/Question/HelperQuestions";
import HelperSelectOne from "src/components/HelperSelectItem/HelperSelectOne/HelperSelectOne";
import {post} from "src/helpers/api";
import useToastStore from "src/store/ToastStore";
import useLanguageStore from "src/store/LanguageStore";

function HelperSelect() {
    const addToast = useToastStore(state => state.addToast);
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);

    const [selectKitchen] = useState<HelperSelectType[]>(
        [kitchenStyleSelect, kitchenLayoutSelect, kitchenMaterialSelect,
            typeTableTopSelect, sizeKitchen, whenNeededKitchen, callBackInfo]
    );
    const [index, setIndex] = useState<number>(0);
    const [wait, setWait] = useState<boolean>(false);

    const [kitchen, setKitchen] = useState<HelperSelectType>(selectKitchen[index]);

    const [valid, setValid] = useState<boolean>(true);

    const [sendData, setSendData] = useState({
        name: '',
        phone: '',
        kitchenStyle: '',
        kitchenScheme: '',
        kitchenMaterial: '',
        kitchenSize: '',
        typeTableTop: '',
        whenNeedKitchen: '',
    })

    function changeIndex(step: number) {
        const number: number = index + step;
        if (number >= selectKitchen.length || number < 0) {
            return;
        }


        if (number >= index) {
            if (kitchen.typeHelper.type === 'question' || kitchen.typeHelper.type === 'callback') {
                for (let question of kitchen.typeHelper.show) {
                    if (getValue(question.type).trim().length < 1 && question.required) {
                        setValid(false);
                        return;
                    }
                }
            } else {
                if (getValue(kitchen.type).trim().length < 1) {
                    setValid(false);
                    return;
                }
            }
        }

        changeKitchen(number);
    }

    function changeKitchen(number: number) {
        const kitchenSelect = selectKitchen[number];
        setKitchen(kitchenSelect)
        setIndex(number);
        setValid(true);
    }

    const onNextSelectHelper = () => {
        changeIndex(1);
    }
    const onPreviewSelectHelper = () => {
        changeIndex(-1);
    }

    const onFinal = () => {
        const values = Object.values(sendData);
        console.log(values);

        if (!isPhoneNumber(sendData.phone) || sendData.name.length < 3) {
            setValid(false);
            return;
        } else
            setValid(true);

        const send = async () => {
            setWait(true);
            const data = await post(urlCallBack, sendData);
            console.log(data);
            if (data.succes === true) {
                reset();
                addToast(translate.helperSelect[language].sentTitle,
                    translate.helperSelect[language].sentSuccessfully,
                );
            } else {
                addToast(translate.helperSelect[language].sentTitle,
                    translate.helperSelect[language].sentNotSuccessfully,
                    VariantBg.danger
                );
            }
            setWait(false);
        }

        send().then();
    }

    function reset() {
        setSendData({
            name: '',
            phone: '',
            kitchenStyle: '',
            kitchenScheme: '',
            kitchenMaterial: '',
            kitchenSize: '',
            typeTableTop: '',
            whenNeedKitchen: '',
        });
        selectKitchen.map(value => value.typeHelper.answer = '');
        changeKitchen(0);
    }

    function getValue(type: string) {
        let value = '';
        switch (type) {
            case 'name':
                value = sendData.name;
                break;
            case 'phone':
                value = sendData.phone;
                break;
            case 'kitchenStyle':
                value = sendData.kitchenStyle;
                break;
            case 'kitchenScheme':
                value = sendData.kitchenScheme;
                break;
            case 'kitchenMaterial':
                value = sendData.kitchenMaterial;
                break;
            case 'kitchenSize':
                value = sendData.kitchenSize;
                break;
            case 'typeTableTop':
                value = sendData.typeTableTop;
                break;
            case 'whenNeedKitchen':
                value = sendData.whenNeedKitchen;
                break;
        }
        return value;
    }


    function setValue(value: Answer, set = true) {
        const answer = value.answer;
        setValid(true);

        switch (value.type) {
            case 'name':
                sendData.name = answer;
                break;
            case 'phone':
                sendData.phone = answer;
                break;
            case 'kitchenStyle':
                sendData.kitchenStyle = answer;
                break;
            case 'kitchenScheme':
                sendData.kitchenScheme = answer;
                break;
            case 'kitchenMaterial':
                sendData.kitchenMaterial = answer;
                break;
            case 'kitchenSize':
                sendData.kitchenSize = answer;
                break;
            case 'typeTableTop':
                sendData.typeTableTop = answer;
                break;
            case 'whenNeedKitchen':
                sendData.whenNeedKitchen = answer;
                break;
        }
        selectKitchen[index].typeHelper.answer = answer;
    }

    return (
        <Container fluid={"lg"} className={'py-5'}>
            <div className={styles.root}>
                <Row className={clsx(styles.text, 'p-4')}>
                    <Col className={clsx('fs-5', 'fw-semibold')}>
                        <div>{translate.helperSelect[language].title}</div>
                        {translate.helperSelect[language].subTitle}
                    </Col>
                    <Col className={clsx('fs-6', 'fw-semibold')} xs={1}> {index + 1}/{selectKitchen.length}</Col>
                </Row>

                <div className={styles.insideWrapper}>

                    <div className={clsx('fs-2', 'fw-medium')}>{kitchen.title[language]}</div>
                    {kitchen.typeHelper.type === 'selectImg' || kitchen.typeHelper.type === 'select' ?
                        <div className={clsx('fs-6', 'py-1')}>
                            {translate.helperSelect[language].selectFromListBelow}
                        </div>
                        : <div className={clsx('fs-6', 'py-1')}>
                            {translate.helperSelect[language].fillInField}
                        </div>}

                    <div className={clsx('my-3', 'p-3', !valid ? styles.invalid : null)}>
                        {kitchen.typeHelper.type === 'selectImg' ?
                            <>
                                <HelperSelectImg type={kitchen.type} show={kitchen.typeHelper.show}
                                                 getSelect={getValue} setSelect={setValue}/>
                            </>
                            : null
                        }
                        {
                            kitchen.typeHelper.type === 'question' ?
                                <>
                                    <HelperQuestions show={kitchen.typeHelper.show}
                                                     getSelect={getValue} setSelect={setValue}/>
                                </>
                                :
                                null
                        }
                        {
                            kitchen.typeHelper.type === 'select' ?
                                <>
                                    <HelperSelectOne type={kitchen.type} show={kitchen.typeHelper.show[language]}
                                                     getSelect={getValue} setSelect={setValue}/>
                                </>
                                :
                                null
                        }

                        {
                            kitchen.typeHelper.type === 'callback' ?
                                <>
                                    <HelperQuestions show={kitchen.typeHelper.show}
                                                     getSelect={getValue} setSelect={setValue}
                                    />
                                </>
                                :
                                null
                        }
                    </div>

                    <div className={clsx('d-flex', 'justify-content-between')}>
                        <Button onClick={onPreviewSelectHelper} variant="danger">
                            ← {translate.helperSelect[language].btnPreview}</Button>
                        {
                            kitchen.typeHelper.type !== 'callback' ?
                                <Button onClick={onNextSelectHelper} variant="success">
                                    {translate.helperSelect[language].btnNext} →</Button>
                                :
                                <Button onClick={onFinal} disabled={wait} variant="success">
                                    {translate.helperSelect[language].bntFinal} ✓</Button>
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default memo(HelperSelect);
