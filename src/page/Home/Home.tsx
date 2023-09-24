import React from 'react';

import {StaticLayer} from "src/layer";
import CatalogFurniture from "src/components/CatalogFurniture/CatalogFurniture";
import clsx from "clsx";
import useLanguageStore from "src/store/LanguageStore";

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
