import img1 from "../../assets/kitchen_material/emal.jpg";
import img2 from "../../assets/kitchen_material/mdf.jpg";
import img3 from "../../assets/kitchen_material/shpon.jpg";
import img4 from "../../assets/kitchen_material/pvh.jpg";
import img5 from "../../assets/kitchen_material/plastik.jpg";
import dontKnow from "../../assets/pngtree-gray-questio.jpg";

import {HelperSelectType, KitchenImgWithTranslate} from "../../type";

const kitchenMaterial: KitchenImgWithTranslate[] = [
    {
        img: img1,
        title: 'Емаль',
        translate: {
            ua: {
                title: 'Емаль',
            },
            ru: {
                title: 'Эмаль',
            }
        }
    }, {
        img: img2,
        title: 'Масив',
        translate: {
            ua: {
                title: 'Масив',
            },
            ru: {
                title: 'Массив',
            }
        }
    }, {
        img: img3,
        title: 'Шпон',
        translate: {
            ua: {
                title: 'Шпон',
            },
            ru: {
                title: 'Шпон',
            }
        }
    }, {
        img: img4,
        title: 'ПВХ',
        translate: {
            ua: {
                title: 'ПВХ',
            },
            ru: {
                title: 'ПВХ',
            }
        }
    }, {
        img: img5,
        title: 'Пластик',
        translate: {
            ua: {
                title: 'Пластик',
            },
            ru: {
                title: 'Пластик',
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
    }
];

const kitchenMaterialSelect: HelperSelectType = {
    title: {
        ua: 'Виберіть матеріал фасадів:',
        ru: 'Выберите материал фасадов:',
    },
    type: 'kitchenMaterial',
    typeHelper: {
        type: "selectImg",
        show: kitchenMaterial,
        answer: '',
    }
}
export {kitchenMaterial, kitchenMaterialSelect};