import React from 'react';
import {StaticLayer} from "../../layer";
import OurWorks from "../../components/OurWorks/OurWorks";
import wardrobesModern from "../../helpers/kitchens/WardrobesModern";
import img from '../../assets/wardrobe-modern.jpg'
import useLanguageStore from "../../store/LanguageStore";

function WardrobesModern() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <StaticLayer previewTitle={translate.pageWardrobesModern[language].title} previewImg={img}>
            <OurWorks kitchens={wardrobesModern}/>
        </StaticLayer>
    );
}

export default WardrobesModern;