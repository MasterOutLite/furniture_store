import React from 'react';
import {StaticLayer} from "../../layer";
import OurWorks from "../../components/OurWorks/OurWorks";
import kitchenModern from "../../helpers/kitchens/KitchenModern";
import clsx from "clsx";
import img from '../../assets/kitchen-modern.jpg'

function KitchenModern() {
    const title ='Кухні в стилі модерн';
    return (
        <StaticLayer previewTitle={title} previewImg={img}>
            <OurWorks kitchens={kitchenModern}/>
        </StaticLayer>
    );
}

export default KitchenModern;