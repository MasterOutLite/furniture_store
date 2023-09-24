import React from 'react';
import {StaticLayer} from "src/layer";
import OurWorks from "src/components/OurWorks/OurWorks";
import kitchenNaturalWood from "src/helpers/kitchens/KitchenNaturalWood";
import img from 'src/assets/naturale-wood.jpg'
import useLanguageStore from "src/store/LanguageStore";

function KitchenNaturalWood() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <StaticLayer previewTitle={translate.pageKitchenNaturalWood[language].title} previewImg={img}>
            <OurWorks kitchens={kitchenNaturalWood}/>
        </StaticLayer>
    );
}

export default KitchenNaturalWood;
