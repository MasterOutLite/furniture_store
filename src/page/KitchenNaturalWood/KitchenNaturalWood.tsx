import React from 'react';
import {StaticLayer} from "../../layer";
import OurWorks from "../../components/OurWorks/OurWorks";
import kitchenNaturalWood from "../../helpers/kitchens/KitchenNaturalWood";
import img from '../../assets/naturale-wood.jpg'

function KitchenNaturalWood() {
    const title ='Кухні із натурального дерева';
    return (
        <StaticLayer previewTitle={title} previewImg={img}>
            <OurWorks kitchens={kitchenNaturalWood}/>
        </StaticLayer>
    );
}

export default KitchenNaturalWood;