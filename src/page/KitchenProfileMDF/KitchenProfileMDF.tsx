import React from 'react';
import {StaticLayer} from "../../layer";
import OurWorks from "../../components/OurWorks/OurWorks";
import kitchenProfileMDF from "../../helpers/kitchens/KitchenProfileMDF";
import clsx from "clsx";
import img from '../../assets/profile-mdf.jpg'

function KitchenProfileMDF() {
    const title = 'Кухні із профільного МДФ';

    return (
        <StaticLayer previewTitle={title} previewImg={img}>
            <OurWorks kitchens={kitchenProfileMDF}/>
        </StaticLayer>
    );
}

export default KitchenProfileMDF;