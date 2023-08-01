import img1 from "../..//assets/kitchen_layout/pryamaya.jpg";
import img2 from "../..//assets/kitchen_layout/ugol.jpg";
import img3 from "../..//assets/kitchen_layout/P-obraz.jpg";
import img4 from "../..//assets/kitchen_layout/ostrov.jpg";
import img5 from "../..//assets/kitchen_layout/af70ddae072e3bf68a77.jpg";
import dontKnow from "../..//assets/pngtree-gray-questio.jpg";
import {HelperSelectType, KitchenImgWithTranslate} from "../../type";


const kitchenLayout: KitchenImgWithTranslate[] = [
    {
        img: img1,
        title: 'Пряма',
        translate: {
            ua: {
                title: 'Пряма',
            },
            ru: {
                title: 'Прямая',
            },
            de: {
                title: 'Gerade',
            },
        }
    }, {
        img: img2,
        title: 'Кутова',
        translate: {
            ua: {
                title: 'Кутова',
            },
            ru: {
                title: 'Угловая',
            },
            de: {
                title: 'Ecke',
            },
        }
    }, {
        img: img3,
        title: 'П-подібна',
        translate: {
            ua: {
                title: 'П-подібна',
            },
            ru: {
                title: 'П-образная',
            },
            de: {
                title: 'U-förmig',
            },
        }
    }, {
        img: img4,
        title: 'Острів',
        translate: {
            ua: {
                title: 'Острів',
            },
            ru: {
                title: 'Остров',
            },
            de: {
                title: 'Die Insel',
            },
        }
    }, {
        img: img5,
        title: 'Свій варіант',
        translate: {
            ua: {
                title: 'Свій варіант',
            },
            ru: {
                title: 'Свой вариант',
            },
            de: {
                title: 'Ihre Variante',
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
    },
]

const kitchenLayoutSelect: HelperSelectType = {
    title:
        {
            ua: 'Виберіть планування кухні:',
            ru: 'Выберите планировку кухни:',
            de: 'Wählen Sie ein Küchenlayout:',
        },
    type: 'kitchenScheme',
    typeHelper: {
        type: "selectImg",
        show: kitchenLayout,
        answer: '',
    }
}

export {kitchenLayout, kitchenLayoutSelect};