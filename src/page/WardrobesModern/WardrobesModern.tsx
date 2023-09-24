import React from 'react';
import {StaticLayer} from "src/layer";
import OurWorks from "src/components/OurWorks/OurWorks";
import wardrobesModern from "src/helpers/kitchens/WardrobesModern";
import img from 'src/assets/wardrobe-modern.jpg'
import useLanguageStore from "src/store/LanguageStore";

function WardrobesModern() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <StaticLayer previewTitle={translate.pageWardrobesModern[language].title} previewImg={img}>
            <OurWorks kitchens={wardrobesModern}/>
        </StaticLayer>
    );
}

export default WardrobesModern;
