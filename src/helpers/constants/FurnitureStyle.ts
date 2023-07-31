import img1 from "../../assets/kitchen-modern.jpg";
import img2 from "../../assets/mdf-milling.jpg";
import img3 from "../../assets/profile-mdf.jpg";
import img4 from "../../assets/naturale-wood.jpg";
import img5 from "../../assets/wardrobe-classicka.jpg";
import img6 from "../../assets/wardrobe-modern.jpg";
import {FurnitureStyle} from "../../type";


const furnitureStyle: FurnitureStyle[] = [
    {
        title: {
            ua: 'Кухні в стилі модерн',
            ru: 'Кухни в стиле модерн',
        },
        subTitle: {
            ua: '"Verona" Фабрика | Кухні модерн від виробника.',
            ru: '"Verona" Фабрика | Кухни модерн от производителя.',
        },
        img: img1,
        hRef: '/KitchenModern'
    }, {
        title:
            {
                ua: 'Кухні МДФ із фрезеруванням',
                ru: 'Кухни МДФ с фрезерованием',
            },
        subTitle:
            {
                ua: '"Verona" Фабрика | Кухні МДФ з фрезеруванням від виробника у Києві.',
                ru: '"Verona" Фабрика | Кухни МДФ с фрезерованием от производителя в Киеве.',
            },
        img: img2,
        hRef: '/MDFKitchens'
    }, {
        title: {
            ua: 'Кухні із профільного МДФ',
            ru: 'Кухни из профильного МДФ',
        },
        subTitle: {
            ua: '"Verona" Фабрика | Кухні з профільного МДФ від виробника.',
            ru: '"Verona" Фабрика | Кухни из профильного МДФ от производителя.',
        },
        img: img3,
        hRef: '/KitchenProfileMDF'
    }, {
        title: {
            ua: 'Кухні із натурального дерева',
            ru: 'Кухни из натурального дерева',
        },
        subTitle: {
            ua: '"Verona" Фабрика | Кухні з натурального дерева від виробника.',
            ru: '"Verona" Фабрика | Кухни из натурального дерева от производителя.',
        },
        img: img4,
        hRef: '/KitchenNaturalWood'
    }, {
        title: {
            ua: 'Шафи класика',
            ru: 'Шкафы классика',
        },
        subTitle: {
            ua: '"Verona" Фабрика | Шафи в класичному стилі від виробника.',
            ru: '"Verona" Фабрика | Шкафы в классическом стиле.',
        },
        img: img5,
        hRef: '/WardrobesClassic'
    }, {
        title: {
            ua: 'Шафи модерн',
            ru: 'Шкафы модерн',
        },
        subTitle: {
            ua: '"Verona" Фабрика | Шафи в стилі модерн від виробника.',
            ru: '"Verona" Фабрика | Шкафы в стиле модерн от производителя.',
        },
        img: img6,
        hRef: '/WardrobesModern'
    },
]

export default furnitureStyle;