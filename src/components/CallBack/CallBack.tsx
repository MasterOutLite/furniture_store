import React, {FormEvent, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import styles from './CallBack.module.scss'
import clsx from "clsx";

import {isPhoneNumber} from '../../helpers/check'
import {post} from "../../helpers/api";
import {urlCallBack} from "../../helpers/constant";
import useToastStore from "../../store/ToastStore";
import {VariantBg} from "../../type";
import useLanguageStore from "../../store/LanguageStore";

export interface CallBackProps {
    cssClass?: string;
    width?: string;
    successful?: () => void;
}

function CallBack({cssClass, width, successful}: CallBackProps) {
    const addToast = useToastStore(state => state.addToast);
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);

    const [isInvalid, setIsInvalid] = useState(false);
    const [wait, setWait] = useState<boolean>(false);

    const [nameUser, setNameUser] = useState<string>('');
    const [number, setNumber] = useState<string>('');

    function sendCallBack(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();
        if (!isPhoneNumber(number)) {
            setIsInvalid(true);
            return;
        } else
            setIsInvalid(false);

        postCallBack(nameUser, number).then();
    }

    async function postCallBack(name: string, phone: string) {
        setWait(true);
        const data = await post(urlCallBack, {name, phone})
        if (data && data.succes === true) {
            setNameUser('');
            setNumber('');
            addToast(translate.callBack[language].callBack,
                translate.callBack[language].sentSuccessfully
            );
            if (successful)
                successful();
        } else {
            addToast(translate.callBack[language].callBack,
                translate.callBack[language].sentNotSuccessfully, VariantBg.danger);
        }
        setWait(false);
    }

    return (
        <Form noValidate className={clsx(styles.root, cssClass)} onSubmit={sendCallBack} style={{maxWidth: width}}>
            <div className={styles.title}>{translate.callBack[language].orderCallBack}</div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className={styles.label}>{translate.callBack[language].yourName}</Form.Label>
                <Form.Control isValid={false} name={'name'} value={nameUser} onChange={(event) => {
                    setNameUser(event.target.value)
                }} type="text" placeholder={translate.callBack[language].yourName} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className={styles.label}>{translate.callBack[language].yourNumber}</Form.Label>
                <Form.Control isInvalid={isInvalid} name={'number'} value={number} onChange={(event) => {
                    setNumber(event.target.value)
                }} type="tel" placeholder="+38" required/>
            </Form.Group>
            <Button type='submit' disabled={wait} className={styles.btn} variant="danger">
                {translate.callBack[language].callBackMe}
            </Button>
        </Form>

    );
}

export default CallBack;