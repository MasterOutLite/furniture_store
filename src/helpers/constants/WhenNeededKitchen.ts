import {HelperSelectType} from "../../type";

const whenNeededKitchen: HelperSelectType = {
    title: 'Коли вам потрібна готова кухня?',
    type: 'whenNeedKitchen',
    typeHelper: {
        type: "select",
        show: ['Через тиждень', 'Через 2 тижні', 'Через місяць', 'Через півроку', 'Просто цікавлюсь'],
        answer: '',
    }
}

export default whenNeededKitchen;