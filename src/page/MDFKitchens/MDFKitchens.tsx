import React from 'react';
import {StaticLayer} from "src/layer";
import OurWorks from "src/components/OurWorks/OurWorks";
import mdfKitchens from "src/helpers/kitchens/MDFKitchens";
import img from 'src/assets/mdf-milling.jpg'
import useLanguageStore from "src/store/LanguageStore";

function MdfKitchens() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <StaticLayer previewTitle={translate.pageMdfKitchens[language].title} previewImg={img}>
            <OurWorks kitchens={mdfKitchens}/>
        </StaticLayer>
    );
}

export default MdfKitchens;
