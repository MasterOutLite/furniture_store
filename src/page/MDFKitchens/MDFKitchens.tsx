import React from 'react';
import {StaticLayer} from "../../layer";
import OurWorks from "../../components/OurWorks/OurWorks";
import mdfKitchens from "../../helpers/kitchens/MDFKitchens";
import img from '../../assets/mdf-milling.jpg'
import useLanguageStore from "../../store/LanguageStore";

function MdfKitchens() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <StaticLayer previewTitle={translate.pageMdfKitchens[language].title} previewImg={img}>
            <OurWorks kitchens={mdfKitchens}/>
        </StaticLayer>
    );
}

export default MdfKitchens;