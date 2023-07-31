import img1 from "../../assets/kitchen_style/classika.jpg";
import img2 from "../../assets/kitchen_style/modern.jpeg";
import img3 from "../../assets/kitchen_style/provans.jpg";
import img4 from "../../assets/kitchen_style/hi-tec.jpeg";
import img5 from "../../assets/kitchen_style/neo-classika.jpg";
import img6 from "../../assets/kitchen_style/loft.jpeg";
import img7 from "../../assets/kitchen_style/minimalizm.jpeg";
import dontKnow from "../../assets/pngtree-gray-questio.jpg";

import {HelperSelectType, KitchenImgWithTranslate} from "../../type";

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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
        }
    },
];

const kitchenStyleSelect: HelperSelectType = {
    title:
        {
            ua: 'В якому стилі Ви бажаєте кухню?',
            ru: 'В каком стиле Вы хотите кухню?',
        },
    type: 'kitchenStyle',
    typeHelper: {
        type: "selectImg",
        show: kitchenStyle,
        answer: '',
    }
}


export {kitchenStyle, kitchenStyleSelect} ;