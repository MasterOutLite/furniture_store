import React from 'react';
import {StaticLayer} from "../../layer";
import OurWorks from "../../components/OurWorks/OurWorks";
import kitchenNaturalWood from "../../helpers/kitchens/KitchenNaturalWood";
import img from '../../assets/naturale-wood.jpg'
import useLanguageStore from "../../store/LanguageStore";

function KitchenNaturalWood() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <StaticLayer previewTitle={translate.pageKitchenNaturalWood[language].title} previewImg={img}>
            <OurWorks kitchens={kitchenNaturalWood}/>
        </StaticLayer>
    );
}

export default KitchenNaturalWood;