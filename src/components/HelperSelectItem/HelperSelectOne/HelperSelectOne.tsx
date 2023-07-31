import React from 'react';
import {Answer} from "../../../type";
import {Form, Stack} from "react-bootstrap";

export interface HelperSelectOneProps {
    type: string;
    show: string[];
    getSelect: (type: string) => string;
    setSelect: (value: Answer) => void;
}

function HelperSelectOne({type, show, getSelect, setSelect}: HelperSelectOneProps) {

    return (
        <Form className="mb-3">
            <Stack gap={2}>
                {
                    show.map(value => (
                        <Form.Check
                            key={value}
                            name="group1"
                            type={"radio"}
                            defaultChecked={value === getSelect(type)}
                            label={value}
                            onClick={() => {
                                setSelect({type, answer: value})
                            }}
                        />

                    ))
                }
            </Stack>
        </Form>
    );
}

export default HelperSelectOne;