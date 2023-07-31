import {HelperSelectType} from "../../type";


const sizeKitchen: HelperSelectType = {
    title: {
        ua: 'Вкажіть розміри вашої кухні:',
        ru: 'Укажите размеры вашей кухни:',
    },
    type: 'arr',
    typeHelper: {
        type: "question",
        show: [
            {
                type: 'kitchenSize',
                inputType: 'text',
                question: {
                    ua: 'Не обов\'язково',
                    ru: 'Не обязательно'
                },
                answer: '',
            }
        ],
        answer: '',
    }
}

export default sizeKitchen;