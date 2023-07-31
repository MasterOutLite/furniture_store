import img1 from "../../assets/type_table_top/chipboard_table_top.jpg";
import img2 from "../../assets/type_table_top/artificial_stone.jpeg";
import img3 from "../../assets/type_table_top/compact_plate.jpg";
import img4 from "../../assets/type_table_top/wooden_table_tops.jpeg";
import img5 from "../../assets/type_table_top/ceramic_granite.jpg";
import dontKnow from "../../assets/pngtree-gray-questio.jpg";

import {HelperSelectType, KitchenImgWithTranslate} from "../../type";

const typeTableTop: KitchenImgWithTranslate[] = [
    {
        img: img1,
        title: 'Стільниця з ДСП',
        translate: {
            ua: {
                title: 'Стільниця з ДСП',
            },
            ru: {
                title: 'Столешница из ДСП'
            }
        }
    }, {
        img: img2,
        title: 'Штучний камінь',
        translate: {
            ua: {
                title: 'Штучний камінь',
            },
            ru: {
                title: 'Искусственный камень',
            }
        }
    }, {
        img: img3,
        title: 'Компакт-плита (HPL)',
        translate: {
            ua: {
                title: 'Компакт-плита (HPL)',
            },
            ru: {
                title: 'Компакт-плита (HPL)',
            }
        }
    }, {
        img: img4,
        title: 'Дерев\'яні стільниці',
        translate: {
            ua: {
                title: 'Дерев\'яні стільниці',
            },
            ru: {
                title: 'Деревянные столешницы',
            }
        }
    }, {
        img: img5,
        title: 'Керамограніт',
        translate: {
            ua: {
                title: 'Керамограніт',
            },
            ru: {
                title: 'Керамогранит',
            }
        }
    }, {
        img: dontKnow,
        title: 'Ще не знаю',
        translate: {
            ua: {
                title: 'Ще не знаю',
            },
            ru: {
                title: 'Пока не знаю',
            }
        }
    },
]

const typeTableTopSelect: HelperSelectType = {
    title: {
        ua: 'Виберіть тип стільниці:',
        ru: 'Выберите тип столешницы:',
    },
    type: 'typeTableTop',
    typeHelper: {
        type: "selectImg",
        show: typeTableTop,
        answer: '',
    }
}

export {typeTableTop, typeTableTopSelect};