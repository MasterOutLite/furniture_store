import React, {useState} from 'react';
import {Toast} from "react-bootstrap";
import useToastStore from "../../../store/ToastStore";
import {ToastItemType} from "../../../type";


function ToastItem({body, title, id, bg, data}: ToastItemType) {
    const [show, setShow] = useState(true);
    const removeToast = useToastStore(state => state.removeToast);

    return (
        <Toast show={show} onClose={() => {
            setShow(false);
            removeToast(id);
        }} autohide delay={10000}
               bg={bg}
        >
            <Toast.Header>
                <strong className="me-auto">{title}</strong>
                <small>{data}</small>
            </Toast.Header>
            <Toast.Body>{body}</Toast.Body>
        </Toast>
    );
}

export default ToastItem;