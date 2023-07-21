import img1 from "../../assets/type_table_top/chipboard_table_top.jpg";
import img2 from "../../assets/type_table_top/artificial_stone.jpeg";
import img3 from "../../assets/type_table_top/compact_plate.jpg";
import img4 from "../../assets/type_table_top/wooden_table_tops.jpeg";
import img5 from "../../assets/type_table_top/ceramic_granite.jpg";
import dontKnow from "../../assets/pngtree-gray-questio.jpg";

import {HelperSelectType, KitchenImg} from "../../type";

const typeTableTop: KitchenImg[] = [
    {
        img: img1,
        title: 'Стільниця з ДСП'
    }, {
        img: img2,
        title: 'Штучний камінь'
    }, {
        img: img3,
        title: 'Компакт-плита (HPL)'
    }, {
        img: img4,
        title: 'Дерев\'яні стільниці'
    }, {
        img: img5,
        title: 'Керамограніт'
    }, {
        img: dontKnow,
        title: 'Ще не знаю'
    },
]

const typeTableTopSelect: HelperSelectType = {
    title: 'Виберіть тип стільниці:',
    type: 'typeTableTop',
    typeHelper: {
        type: "selectImg",
        show: typeTableTop,
        answer: '',
    }
}

export {typeTableTop, typeTableTopSelect};