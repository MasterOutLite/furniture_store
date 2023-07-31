import React from 'react';
import {StaticLayer} from "../../layer";
import OurWorks from "../../components/OurWorks/OurWorks";
import wardrobesClassic from "../../helpers/kitchens/WardrobesClassic";
import img from '../../assets/wardrobe-classicka.jpg'
import useLanguageStore from "../../store/LanguageStore";

function WardrobesClassic() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <StaticLayer previewTitle={translate.pageWardrobesClassic[language].title} previewImg={img}>
            <OurWorks kitchens={wardrobesClassic}/>
        </StaticLayer>
    );
}

export default WardrobesClassic;