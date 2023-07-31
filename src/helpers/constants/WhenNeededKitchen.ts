import {HelperSelectType} from "../../type";

const whenNeededKitchen: HelperSelectType = {
    title: {
        ua: 'Коли вам потрібна готова кухня?',
        ru: 'Когда вам нужна готовая кухня?',
    },
    type: 'whenNeedKitchen',
    typeHelper: {
        type: "select",
        show: {
            ua: ['Через тиждень', 'Через 2 тижні', 'Через місяць', 'Через півроку', 'Просто цікавлюсь'],
            ru:['Через неделю', 'Через 2 недели', 'Через месяц', 'Через полгода', 'Просто интересуюсь'],
        },
        answer: '',
    }
}

export default whenNeededKitchen;