import React from 'react';
import {Main} from "src/layer";
import Title from "src/components/Title/Title";
import useLanguageStore from "src/store/LanguageStore";

function NotFound() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <Main>
            <Title title={translate.pageNotFound[language].title}/>
        </Main>
    );
}

export default NotFound;
