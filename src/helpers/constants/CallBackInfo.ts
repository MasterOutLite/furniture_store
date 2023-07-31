import {HelperSelectType} from "../../type";


const callBackInfo: HelperSelectType = {
    title: {
        ua: 'Як з вами звязатися?',
        ru: 'Как с вами связаться?',
    },
    type: 'arr',
    typeHelper: {
        type: "callback",
        show: [{
            question:
                {
                    ua: 'Ваше ім\'я',
                    ru: 'Ваше имя',
                },
            type: 'name',
            inputType: 'text',
            answer: '',
            required: true
        }, {
            question: {
                ua: 'Ваш номер телефону',
                ru: 'Ваш номер телефона',
            },
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