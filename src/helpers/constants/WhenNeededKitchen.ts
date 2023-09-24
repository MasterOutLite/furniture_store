import {HelperSelectType} from "src/type";

const whenNeededKitchen: HelperSelectType = {
    title: {
        ua: 'Коли вам потрібна готова кухня?',
        ru: 'Когда вам нужна готовая кухня?',
        de: 'Wann benötigen Sie eine Fertigküche?',
    },
    type: 'whenNeedKitchen',
    typeHelper: {
        type: "select",
        show: {
            ua: ['Через тиждень', 'Через 2 тижні', 'Через місяць', 'Через півроку', 'Просто цікавлюсь'],
            ru:['Через неделю', 'Через 2 недели', 'Через месяц', 'Через полгода', 'Просто интересуюсь'],
            de: ['In einer Woche', 'In 2 Wochen', 'In einem Monat', 'In 6 Monaten', 'Nur neugierig'],
        },
        answer: '',
    }
}

export default whenNeededKitchen;
