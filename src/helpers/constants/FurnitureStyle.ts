import img1 from "../../assets/kitchen-modern.jpg";
import img2 from "../../assets/mdf-milling.jpg";
import img3 from "../../assets/profile-mdf.jpg";
import img4 from "../../assets/naturale-wood.jpg";
import img5 from "../../assets/wardrobe-classicka.jpg";
import img6 from "../../assets/wardrobe-modern.jpg";
import {FurnitureStyle} from "../../type";



const furnitureStyle: FurnitureStyle[] = [
    {
        title: 'Кухні в стилі модерн',
        subTitle: '"Verona" Фабрика | Кухні модерн від виробника.',
        img: img1,
        hRef: '/KitchenModern'
    }, {
        title: 'Кухні МДФ із фрезеруванням',
        subTitle: '"Verona" Фабрика | Кухні МДФ з фрезеруванням від виробника у Києві.',
        img: img2,
        hRef: '/MDFKitchens'
    }, {
        title: 'Кухні із профільного МДФ',
        subTitle: '"Verona" Фабрика | Кухні з профільного МДФ від виробника.',
        img: img3,
        hRef: '/KitchenProfileMDF'
    }, {
        title: 'Кухні із натурального дерева',
        subTitle: '"Verona" Фабрика | Кухні з натурального дерева від виробника.',
        img: img4,
        hRef: '/KitchenNaturalWood'
    }, {
        title: 'Шафи класика',
        subTitle: '"Verona" Фабрика | Шафи в класичному стилі від виробника.',
        img: img5,
        hRef: '/WardrobesClassic'
    }, {
        title: 'Шафи модерн',
        subTitle: '"Verona" Фабрика | Шафи в стилі модерн від виробника.',
        img: img6,
        hRef: '/WardrobesModern'
    },
]

export default furnitureStyle;