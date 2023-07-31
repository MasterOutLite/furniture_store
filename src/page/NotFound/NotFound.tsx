import React from 'react';
import {Main} from "../../layer";
import Title from "../../components/Title/Title";
import useLanguageStore from "../../store/LanguageStore";

function NotFound() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <Main>
            <Title title={translate.pageNotFound[language].title}/>
        </Main>
    );
}

export default NotFound;