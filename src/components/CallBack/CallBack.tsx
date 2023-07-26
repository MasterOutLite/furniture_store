import React, {FormEvent, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import styles from './CallBack.module.scss'
import clsx from "clsx";

import {isPhoneNumber} from '../../helpers/check'
import {post} from "../../helpers/api";
import {urlCallBack} from "../../helpers/constant";
import useToastStore from "../../store/ToastStore";
import {VariantBg} from "../../type";

export interface CallBackProps {
    cssClass?: string;
}

function CallBack({cssClass}: CallBackProps) {
    const addToast = useToastStore(state => state.addToast);
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
        console.log(data);
        if (data && data.succes === true) {
            setNameUser('');
            setNumber('');
            addToast('Зворотній виклик',
                'Ваша звернення було відправлено. Найближчим часом ми вам перетелефонуємо.'
            );
        } else {
            addToast('Зворотній виклик', 'Під час відправлення сталася помилка. Спробуйти пізніше.', VariantBg.danger);
        }
        setWait(false);
    }

    return (
        <Form noValidate className={clsx(styles.root, cssClass)} onSubmit={sendCallBack}>
            <div className={styles.title}>Замовити зворотній дзвінок</div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className={styles.label}>Ваше Імʼя</Form.Label>
                <Form.Control isValid={false} name={'name'} value={nameUser} onChange={(event) => {
                    setNameUser(event.target.value)
                }} type="text" placeholder="Ім'я" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className={styles.label}>Номер телефону</Form.Label>
                <Form.Control isInvalid={isInvalid} name={'number'} value={number} onChange={(event) => {
                    setNumber(event.target.value)
                }} type="tel" placeholder="+38" required/>
            </Form.Group>
            <Button type='submit' disabled={wait} className={styles.btn} variant="danger">Передзвоніть
                мені</Button>
        </Form>

    );
}

export default CallBack;