import img1 from "src/assets/kitchen_material/emal.jpg";
import img2 from "src/assets/kitchen_material/mdf.jpg";
import img3 from "src/assets/kitchen_material/shpon.jpg";
import img4 from "src/assets/kitchen_material/pvh.jpg";
import img5 from "src/assets/kitchen_material/plastik.jpg";
import dontKnow from "src/assets/pngtree-gray-questio.jpg";

import {HelperSelectType, KitchenImgWithTranslate} from "src/type";

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
            },
            de: {
                title: 'Emaille',
            },
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
            },
            de: {
                title: 'Reihe',
            },
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
            },
            de: {
                title: 'Furnier',
            },
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
            },
            de: {
                title: 'PVC',
            },
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
            },
            de: {
                title: 'Kunststoff',
            },
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
            },
            de: {
                title: 'Weiß ich noch nicht',
            },
        }
    }
];

const kitchenMaterialSelect: HelperSelectType = {
    title: {
        ua: 'Виберіть матеріал фасадів:',
        ru: 'Выберите материал фасадов:',
        de: 'Wählen Sie das Fassadenmaterial:',
    },
    type: 'kitchenMaterial',
    typeHelper: {
        type: "selectImg",
        show: kitchenMaterial,
        answer: '',
    }
}
export {kitchenMaterial, kitchenMaterialSelect};
