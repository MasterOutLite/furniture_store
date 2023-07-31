import React from 'react';

import {StaticLayer} from "../../layer";
import CatalogFurniture from "../../components/CatalogFurniture/CatalogFurniture";
import clsx from "clsx";
import useLanguageStore from "../../store/LanguageStore";

function Home() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);

    return (
        <StaticLayer
            previewTitleChildren={
                <div className={clsx('fs-5',)}>
                    {translate.pageHome[language].subTitle}
                </div>
            }
            previewTitle={translate.pageHome[language].title}>
            <CatalogFurniture/>
        </StaticLayer>
    );
}

export default Home;