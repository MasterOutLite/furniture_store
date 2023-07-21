import React from 'react';
import {StaticLayer} from "../../layer";
import OurWorks from "../../components/OurWorks/OurWorks";
import wardrobesClassic from "../../helpers/kitchens/WardrobesClassic";
import img from '../../assets/wardrobe-classicka.jpg'

function WardrobesClassic() {
    const title ='Шафи Класика';
    return (
        <StaticLayer previewTitle={title} previewImg={img}>
            <OurWorks kitchens={wardrobesClassic}/>
        </StaticLayer>
    );
}

export default WardrobesClassic;