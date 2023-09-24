import React from 'react';
import {StaticLayer} from "src/layer";
import OurWorks from "src/components/OurWorks/OurWorks";
import wardrobesClassic from "src/helpers/kitchens/WardrobesClassic";
import img from 'src/assets/wardrobe-classicka.jpg'
import useLanguageStore from "src/store/LanguageStore";

function WardrobesClassic() {
    const [language, translate] = useLanguageStore(state => [state.language, state.translate]);
    return (
        <StaticLayer previewTitle={translate.pageWardrobesClassic[language].title} previewImg={img}>
            <OurWorks kitchens={wardrobesClassic}/>
        </StaticLayer>
    );
}

export default WardrobesClassic;
