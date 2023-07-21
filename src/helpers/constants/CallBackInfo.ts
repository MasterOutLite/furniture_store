import {HelperSelectType} from "../../type";


const callBackInfo: HelperSelectType = {
    title: 'Як з вами звязатися?',
    type: 'arr',
    typeHelper: {
        type: "callback",
        show: [{
            question: 'Ваше ім\'я',
            type: 'name',
            inputType: 'text',
            answer: '',
            required: true
        }, {
            question: 'Ваш номер телефону',
            type: 'phone',
            inputType: 'tel',
            answer: '',
            required: true
        },
        ],
        answer: '',
    }
}

export default callBackInfo;