import React from 'react';
import {StaticLayer} from "../../layer";
import OurWorks from "../../components/OurWorks/OurWorks";
import kitchenProfileMDF from "../../helpers/kitchens/KitchenProfileMDF";
import img from '../../assets/profile-mdf.jpg'
import useLanguageStore from "../../store/LanguageStore";

function KitchenProfileMDF() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <StaticLayer previewTitle={translate.pageKitchenProfileMDF[language].title} previewImg={img}>
            <OurWorks kitchens={kitchenProfileMDF}/>
        </StaticLayer>
    );
}

export default KitchenProfileMDF;