import img1 from "../../assets/kitchen_style/classika.jpg";
import img2 from "../../assets/kitchen_style/modern.jpeg";
import img3 from "../../assets/kitchen_style/provans.jpg";
import img4 from "../../assets/kitchen_style/hi-tec.jpeg";
import img5 from "../../assets/kitchen_style/neo-classika.jpg";
import img6 from "../../assets/kitchen_style/loft.jpeg";
import img7 from "../../assets/kitchen_style/minimalizm.jpeg";
import dontKnow from "../../assets/pngtree-gray-questio.jpg";

import {KitchenImg, HelperSelectType} from "../../type";

const kitchenStyle: KitchenImg[] = [
    {
        img: img1,
        title: 'Класика'
    }, {
        img: img2,
        title: 'Модерн'
    }, {
        img: img3,
        title: 'Прованс'
    }, {
        img: img4,
        title: 'Хай-Тек'
    }, {
        img: img5,
        title: 'Неокласика'
    }, {
        img: img6,
        title: 'Лофт'
    }, {
        img: img7,
        title: 'Мінімалізм'
    }, {
        img: dontKnow,
        title: 'Ще не вирішився'
    },
];

const kitchenStyleSelect: HelperSelectType = {
    title: 'В якому стилі Ви бажаєте кухню?',
    type: 'kitchenStyle',
    typeHelper: {
        type: "selectImg",
        show: kitchenStyle,
        answer: '',
    }
}


export {kitchenStyle, kitchenStyleSelect} ;