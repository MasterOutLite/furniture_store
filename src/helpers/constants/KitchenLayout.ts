import img1 from "../..//assets/kitchen_layout/pryamaya.jpg";
import img2 from "../..//assets/kitchen_layout/ugol.jpg";
import img3 from "../..//assets/kitchen_layout/P-obraz.jpg";
import img4 from "../..//assets/kitchen_layout/ostrov.jpg";
import img5 from "../..//assets/kitchen_layout/af70ddae072e3bf68a77.jpg";
import dontKnow from "../..//assets/pngtree-gray-questio.jpg";
import {HelperSelectType, KitchenImg} from "../../type";


const kitchenLayout: KitchenImg[] = [
    {
        img: img1,
        title: 'Пряма'
    }, {
        img: img2,
        title: 'Кутова'
    }, {
        img: img3,
        title: 'П-подібна'
    }, {
        img: img4,
        title: 'Острів'
    }, {
        img: img5,
        title: 'Свій варіант'
    }, {
        img: dontKnow,
        title: 'Ще не знаю'
    },
]

const kitchenLayoutSelect: HelperSelectType = {
    title: 'Виберіть планування кухні:',
    type: 'kitchenScheme',
    typeHelper: {
        type: "selectImg",
        show: kitchenLayout,
        answer: '',
    }
}

export {kitchenLayout, kitchenLayoutSelect};