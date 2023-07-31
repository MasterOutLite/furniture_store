import React from 'react';
import {StaticLayer} from "../../layer";
import OurWorks from "../../components/OurWorks/OurWorks";
import kitchenModern from "../../helpers/kitchens/KitchenModern";
import img from '../../assets/kitchen-modern.jpg'
import useLanguageStore from "../../store/LanguageStore";

function KitchenModern() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <StaticLayer previewTitle={translate.pageKitchenModern[language].title} previewImg={img}>
            <OurWorks kitchens={kitchenModern}/>
        </StaticLayer>
    );
}

export default KitchenModern;