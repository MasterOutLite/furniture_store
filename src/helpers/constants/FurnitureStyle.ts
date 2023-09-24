import img1 from "src/assets/kitchen-modern.jpg";
import img2 from "src/assets/mdf-milling.jpg";
import img3 from "src/assets/profile-mdf.jpg";
import img4 from "src/assets/naturale-wood.jpg";
import img5 from "src/assets/wardrobe-classicka.jpg";
import img6 from "src/assets/wardrobe-modern.jpg";
import {FurnitureStyle} from "src/type";


const furnitureStyle: FurnitureStyle[] = [
    {
        title: {
            ua: 'Кухні в стилі модерн',
            ru: 'Кухни в стиле модерн',
            de: 'Küchen im modernen Stil',
        },
        subTitle: {
            ua: '"Verona" Фабрика | Кухні модерн від виробника.',
            ru: '"Verona" Фабрика | Кухни модерн от производителя.',
            de: 'Fabrik "Verona" | Moderne Küchen vom Hersteller.',
        },
        img: img1,
        hRef: '/KitchenModern'
    }, {
        title:
            {
                ua: 'Кухні МДФ із фрезеруванням',
                ru: 'Кухни МДФ с фрезерованием',
                de: 'MDF-Küchen mit Fräsen',
            },
        subTitle:
            {
                ua: '"Verona" Фабрика | Кухні МДФ з фрезеруванням від виробника у Києві.',
                ru: '"Verona" Фабрика | Кухни МДФ с фрезерованием от производителя в Киеве.',
                de: 'Fabrik "Verona" | MDF-Küchen mit Fräsung vom Hersteller in Kiew.',
            },
        img: img2,
        hRef: '/MDFKitchens'
    }, {
        title: {
            ua: 'Кухні із профільного МДФ',
            ru: 'Кухни из профильного МДФ',
            de: 'Küchen aus profiliertem MDF',
        },
        subTitle: {
            ua: '"Verona" Фабрика | Кухні з профільного МДФ від виробника.',
            ru: '"Verona" Фабрика | Кухни из профильного МДФ от производителя.',
            de: 'Fabrik "Verona" | Küchen aus profiliertem MDF vom Hersteller.',
        },
        img: img3,
        hRef: '/KitchenProfileMDF'
    }, {
        title: {
            ua: 'Кухні із натурального дерева',
            ru: 'Кухни из натурального дерева',
            de: 'Küchen aus Naturholz',
        },
        subTitle: {
            ua: '"Verona" Фабрика | Кухні з натурального дерева від виробника.',
            ru: '"Verona" Фабрика | Кухни из натурального дерева от производителя.',
            de: 'Fabrik "Verona" | Küchen aus Naturholz vom Hersteller.',
        },
        img: img4,
        hRef: '/KitchenNaturalWood'
    }, {
        title: {
            ua: 'Шафи класика',
            ru: 'Шкафы классика',
            de: 'Schränke sind Klassiker',
        },
        subTitle: {
            ua: '"Verona" Фабрика | Шафи в класичному стилі від виробника.',
            ru: '"Verona" Фабрика | Шкафы в классическом стиле.',
            de: 'Fabrik "Verona" | Schränke im klassischen Stil vom Hersteller.',
        },
        img: img5,
        hRef: '/WardrobesClassic'
    }, {
        title: {
            ua: 'Шафи модерн',
            ru: 'Шкафы модерн',
            de: 'Moderne Kleiderschränke',
        },
        subTitle: {
            ua: '"Verona" Фабрика | Шафи в стилі модерн від виробника.',
            ru: '"Verona" Фабрика | Шкафы в стиле модерн от производителя.',
            de: 'Fabrik "Verona" | Schränke im modernen Stil vom Hersteller.',
        },
        img: img6,
        hRef: '/WardrobesModern'
    },
]

export default furnitureStyle;
