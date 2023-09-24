import img1 from "src/assets/kitchen_style/classika.jpg";
import img2 from "src/assets/kitchen_style/modern.jpeg";
import img3 from "src/assets/kitchen_style/provans.jpg";
import img4 from "src/assets/kitchen_style/hi-tec.jpeg";
import img5 from "src/assets/kitchen_style/neo-classika.jpg";
import img6 from "src/assets/kitchen_style/loft.jpeg";
import img7 from "src/assets/kitchen_style/minimalizm.jpeg";
import dontKnow from "src/assets/pngtree-gray-questio.jpg";

import {HelperSelectType, KitchenImgWithTranslate} from "src/type";

const kitchenStyle: KitchenImgWithTranslate[] = [
    {
        img: img1,
        title: 'Класика',
        translate: {
            ua: {
                title: 'Класика',
            },
            ru: {
                title: 'Классика',
            },
            de: {
                title: 'Klassisch',
            },
        }
    }, {
        img: img2,
        title: 'Модерн',
        translate: {
            ua: {
                title: 'Модерн',
            },
            ru: {
                title: 'Модерн',
            },
            de: {
                title: 'Modern',
            },
        }
    }, {
        img: img3,
        title: 'Прованс',
        translate: {
            ua: {
                title: 'Прованс',
            },
            ru: {
                title: 'Прованс',
            },
            de: {
                title: 'Provence',
            },
        }
    }, {
        img: img4,
        title: 'Хай-Тек',
        translate: {
            ua: {
                title: 'Хай-Тек',
            },
            ru: {
                title: 'Хай-Тек',
            },
            de: {
                title: 'Hightech',
            },
        }
    }, {
        img: img5,
        title: 'Неокласика',
        translate: {
            ua: {
                title: 'Неокласика',
            },
            ru: {
                title: 'Неоклассика',
            },
            de: {
                title: 'Neo-Klassiker',
            },
        }
    }, {
        img: img6,
        title: 'Лофт',
        translate: {
            ua: {
                title: 'Лофт',
            },
            ru: {
                title: 'Лофт',
            },
            de: {
                title: 'Loft',
            },
        }
    }, {
        img: img7,
        title: 'Мінімалізм',
        translate: {
            ua: {
                title: 'Мінімалізм',
            },
            ru: {
                title: 'Минимализм',
            },
            de: {
                title: 'Minimalistisch',
            },
        }
    }, {
        img: dontKnow,
        title: 'Ще не вирішився',
        translate: {
            ua: {
                title: 'Ще не вирішився',
            },
            ru: {
                title: 'Еще не решился',
            },
            de: {
                title: 'Weiß ich noch nicht',
            },
        }
    },
];

const kitchenStyleSelect: HelperSelectType = {
    title:
        {
            ua: 'В якому стилі Ви бажаєте кухню?',
            ru: 'В каком стиле Вы хотите кухню?',
            de: 'In welchem Stil wünschen Sie sich eine Küche?',
        },
    type: 'kitchenStyle',
    typeHelper: {
        type: "selectImg",
        show: kitchenStyle,
        answer: '',
    }
}


export {kitchenStyle, kitchenStyleSelect} ;
