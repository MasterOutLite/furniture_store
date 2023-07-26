import React from 'react';
import {ToastContainer} from "react-bootstrap";
import ToastItem from "./ToastItem/ToastItem";
import useToastStore from "../../store/ToastStore";
import clsx from "clsx";

function ToastProvider() {

    const toasts = useToastStore(state => state.toasts);

    return (
        <ToastContainer position="top-end" className={clsx("p-3", 'position-fixed')} style={{zIndex: 1}}>
            {
                toasts.map((value, index) => (
                    <ToastItem key={value.id} {...value}/>
                ))
            }
        </ToastContainer>
    );
}

export default ToastProvider;