import React from 'react';

import {StaticLayer} from "../../layer";
import CatalogFurniture from "../../components/CatalogFurniture/CatalogFurniture";
import clsx from "clsx";

function Home() {
    const title = 'Салон меблів';
    const subTitle =
        <div className={clsx('fs-5',)}> Купуючи у виробника, Ви економите до 40% на вартості меблів. </div>;

    return (
        <StaticLayer previewTitleChildren={subTitle} previewTitle={title}>
            <CatalogFurniture/>
        </StaticLayer>
    );
}

export default Home;