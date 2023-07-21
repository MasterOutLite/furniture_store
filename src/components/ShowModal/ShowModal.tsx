import React from 'react';
import {Button, Modal} from "react-bootstrap";

export interface ShowModalProps {
    header?: string;
    description: string;
    show: boolean;
    setShow: (value: boolean)=> void;
}

function ShowModal({description, header, show, setShow}: ShowModalProps) {
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ShowModal;