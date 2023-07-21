import img1 from "../../assets/kitchen_material/emal.jpg";
import img2 from "../../assets/kitchen_material/mdf.jpg";
import img3 from "../../assets/kitchen_material/shpon.jpg";
import img4 from "../../assets/kitchen_material/pvh.jpg";
import img5 from "../../assets/kitchen_material/plastik.jpg";
import dontKnow from "../../assets/pngtree-gray-questio.jpg";

import {HelperSelectType, KitchenImg} from "../../type";

const kitchenMaterial: KitchenImg[] = [
    {
        img: img1,
        title: 'Емаль'
    }, {
        img: img2,
        title: 'Масив'
    }, {
        img: img3,
        title: 'Шпон'
    }, {
        img: img4,
        title: 'ПВХ'
    }, {
        img: img5,
        title: 'Пластик'
    }, {
        img: dontKnow,
        title: 'Ще не знаю'
    }
];

const kitchenMaterialSelect: HelperSelectType = {
    title: 'Виберіть матеріал фасадів:',
    type: 'kitchenMaterial',
    typeHelper: {
        type: "selectImg",
        show: kitchenMaterial,
        answer: '',
    }
}
export {kitchenMaterial, kitchenMaterialSelect};