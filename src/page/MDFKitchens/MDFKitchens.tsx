import React, {useEffect} from 'react';
import {StaticLayer} from "../../layer";
import OurWorks from "../../components/OurWorks/OurWorks";
import mdfKitchens from "../../helpers/kitchens/MDFKitchens";
import img from '../../assets/mdf-milling.jpg'

function MdfKitchens() {
    const title = ' Кухні МДФ із фрезеруванням';

    return (
        <StaticLayer previewTitle={title} previewImg={img}>
            <OurWorks kitchens={mdfKitchens}/>
        </StaticLayer>
    );
}

export default MdfKitchens;