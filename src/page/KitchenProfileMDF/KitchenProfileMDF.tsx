import React from 'react';
import {StaticLayer} from "src/layer";
import OurWorks from "src/components/OurWorks/OurWorks";
import kitchenProfileMDF from "src/helpers/kitchens/KitchenProfileMDF";
import img from 'src/assets/profile-mdf.jpg'
import useLanguageStore from "src/store/LanguageStore";

function KitchenProfileMDF() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <StaticLayer previewTitle={translate.pageKitchenProfileMDF[language].title} previewImg={img}>
            <OurWorks kitchens={kitchenProfileMDF}/>
        </StaticLayer>
    );
}

export default KitchenProfileMDF;
