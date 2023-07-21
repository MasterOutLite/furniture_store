import React from 'react';
import {StaticLayer} from "../../layer";
import OurWorks from "../../components/OurWorks/OurWorks";
import wardrobesModern from "../../helpers/kitchens/WardrobesModern";
import img from '../../assets/wardrobe-modern.jpg'

function WardrobesModern() {
    const title ='Шафи Модерн';
    return (
        <StaticLayer previewTitle={title} previewImg={img}>
            <OurWorks kitchens={wardrobesModern}/>
        </StaticLayer>
    );
}

export default WardrobesModern;