import {HelperSelectType} from "../../type";





const sizeKitchen: HelperSelectType = {
    title: 'Вкажіть розміри вашої кухні:',
    type: 'arr',
    typeHelper: {
        type: "question",
        show: [
            {
                type: 'kitchenSize',
                inputType:'text',
                question: 'Не обов\'язково',
                answer: '',
            }
        ],
        answer: '',
    }
}

export default sizeKitchen;