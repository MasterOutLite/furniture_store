import React from 'react';
import {StaticLayer} from "src/layer";
import OurWorks from "src/components/OurWorks/OurWorks";
import kitchenModern from "src/helpers/kitchens/KitchenModern";
import img from 'src/assets/kitchen-modern.jpg'
import useLanguageStore from "src/store/LanguageStore";

function KitchenModern() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <StaticLayer previewTitle={translate.pageKitchenModern[language].title} previewImg={img}>
            <OurWorks kitchens={kitchenModern}/>
        </StaticLayer>
    );
}

export default KitchenModern;
