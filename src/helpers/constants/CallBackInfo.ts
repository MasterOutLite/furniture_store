import {HelperSelectType} from "src/type";


const callBackInfo: HelperSelectType = {
    title: {
        ua: 'Як з вами звязатися?',
        ru: 'Как с вами связаться?',
        de: 'Wie kontaktiere ich dich?'
    },
    type: 'arr',
    typeHelper: {
        type: "callback",
        show: [{
            question:
                {
                    ua: 'Ваше ім\'я',
                    ru: 'Ваше имя',
                    de: 'Ihren Namen',
                },
            type: 'name',
            inputType: 'text',
            answer: '',
            required: true
        }, {
            question: {
                ua: 'Ваш номер телефону',
                ru: 'Ваш номер телефона',
                de: 'Deine Telefonnummer',
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
