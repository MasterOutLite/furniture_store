import React, {ChangeEvent} from 'react';
import {Form, Stack} from "react-bootstrap";
import {Answer, Question} from "../../../type";
import useLanguageStore from "../../../store/LanguageStore";

export interface QuestionProps {
    show: Question[];
    getSelect: (type: string) => string;
    setSelect: (value: Answer) => void;
}

function HelperQuestions({show, getSelect, setSelect,}: QuestionProps) {
    const [language] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <Stack gap={3}>
            {
                show.map(value => (
                    <Form.Control
                        key={value.type}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            const answer = event.target.value;
                            value.answer = answer;
                            setSelect({type: value.type, answer: answer})
                        }}
                        defaultValue={getSelect(value.type)}
                        type={value.inputType} placeholder={value.question[language]} required/>
                ))
            }

        </Stack>
    );
}

export default HelperQuestions;