import {HelperSelectType} from "../../type";


const sizeKitchen: HelperSelectType = {
    title: {
        ua: 'Вкажіть розміри вашої кухні:',
        ru: 'Укажите размеры вашей кухни:',
        de: 'Geben Sie die Maße Ihrer Küche an:',
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
                    ru: 'Не обязательно',
                    de: 'Nicht unbedingt',
                },
                answer: '',
            }
        ],
        answer: '',
    }
}

export default sizeKitchen;