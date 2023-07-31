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
            }
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
            }
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
            }
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
            }
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

const kitchenLayoutSelect: HelperSelectType = {
    title:
        {
            ua: 'Виберіть планування кухні:',
            ru: 'Выберите планировку кухни:',
        },
    type: 'kitchenScheme',
    typeHelper: {
        type: "selectImg",
        show: kitchenLayout,
        answer: '',
    }
}

export {kitchenLayout, kitchenLayoutSelect};