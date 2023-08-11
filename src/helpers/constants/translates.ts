import {SelectTranslate} from "../../type";

const translates: SelectTranslate = {
    info: {
        ua: {
            work: 'Працюємо щодня, з 8:00 до 18:00',
            title: 'Меблева фабрика "Verona"',
            legalDocuments: 'Юридичні документи',
        },
        ru: {
            work: 'Работаем каждый день, с 8:00 до 18:00',
            title: 'Мебельная фабрика "Verona"',
            legalDocuments: 'Юридические документы',
        },
        de: {
            work: 'Wir arbeiten jeden Tag von 8:00 bis 18:00 Uhr',
            title: 'Möbelfabrik "Verona"',
            legalDocuments: 'Impressum',
        }
    },
    header: {
        ua: {
            from: 'Меблі від виробника',
            work: 'Працюємо щодня з 8:00 до 18:00',
        },
        ru: {
            from: 'Мебель от производителя',
            work: 'Работаем ежедневно с 8:00 до 18:00',
        },
        de: {
            from: 'Möbel vom Hersteller',
            work: 'Wir arbeiten jeden Tag von 8:00 bis 18:00 Uhr',
        }
    },
    footer: {
        ua: {
            title: 'Меблева фабрика Verona',
            security: 'Всі права захищені.',
        },
        ru: {
            title: 'Мебельная фабрика Verona',
            security: 'Все права защищены.',
        },
        de: {
            title: 'Möbelfabrik Verona',
            security: 'Alle Rechte vorbehalten.',
        }
    },
    catalogFurniture: {
        ua: {
            title: 'Каталог меблів',
            btnGo: 'Перейти',
        },
        ru: {
            title: 'Каталог мебели',
            btnGo: 'Перейти',
        },
        de: {
            title: 'Katalog der Möbel',
            btnGo: 'Gehe zu',
        },
    },
    callbackContacts: {
        ua: {
            whyWe: 'Чому ми?',
            exampleWork: 'Зразок наших робіт',
            contacts: 'Зв\'яжися із нами',
            video: 'Відео огляд',
        },
        ru: {
            whyWe: 'Почему мы?',
            exampleWork: 'Образец наших работ',
            contacts: 'Свяжись с нами',
            video: 'Видео обзор',
        },
        de: {
            whyWe: 'Warum wir',
            exampleWork: 'Unsere Arbeiten',
            contacts: 'Kontaktiere uns',
            video: 'Video rezension',
        },
    },
    callBack: {
        ua: {
            orderCallBack: 'Замовити зворотній дзвінок',
            yourName: 'Ваше Імʼя',
            yourNumber: 'Номер телефону',
            callBackMe: 'Передзвоніть мені',
            callBack: 'Зворотній виклик',
            sentSuccessfully: 'Ваше звернення було відправлено. Найближчим часом ми вам перетелефонуємо.',
            sentNotSuccessfully: 'Під час відправлення сталася помилка. Спробуйте пізніше.',
        },
        ru: {
            orderCallBack: 'Заказать обратный звонок',
            yourName: 'Ваше Имя',
            yourNumber: 'Номер телефона',
            callBackMe: 'Перезвоните мне',
            callBack: 'Обратный вызов',
            sentSuccessfully: 'Ваше обращение было отправлено. В ближайшее время мы вам перезвоним.',
            sentNotSuccessfully: 'Во время отправки произошла ошибка. Попробуйте позже.',
        },
        de: {
            orderCallBack: 'Bestellen Sie einen Rückruf',
            yourName: 'Ihren Namen',
            yourNumber: 'Telefonnummer',
            callBackMe: 'Ruf mich zurück',
            callBack: 'Ruf zurück',
            sentSuccessfully: 'Ihre Anfrage wurde verschickt. Wir rufen Sie in Kürze zurück.',
            sentNotSuccessfully: 'Beim Senden ist ein Fehler aufgetreten. Versuchen Sie es später erneut.',
        },
    },
    helperSelect: {
        ua: {
            title: 'Розрахуйте, скільки коштуватиме кухня.',
            subTitle: 'Вкажіть параметри, щоб фахівець зміг заздалегідь запропонувати вам кілька варіантів та зорієнтувати за ціною',
            selectFromListBelow: 'Виберіть зі списку нижче, що вам подобається і натисніть кнопку внизу',
            fillInField: 'Заповніть поля даними та натисніть кнопку внизу',
            sentTitle: 'Допомога із вибором кухні',
            sentSuccessfully: 'Ваша заявка була успішно відправлена на обробку!\nНевдовзі з вами зв\'яжуться.',
            sentNotSuccessfully: 'Під час відправлення сталася помилка. Спробуйте пізніше.',
            btnPreview: 'Назад',
            btnNext: 'Вперед',
            bntFinal: 'Завершити',
        },
        ru: {
            title: 'Рассчитайте, сколько будет стоить кухня.',
            subTitle: 'Укажите параметры, чтобы специалист смог заранее предложить вам несколько вариантов и сориентировать по цене',
            selectFromListBelow: 'Выберите из списка ниже, что вам нравится и нажмите кнопку внизу',
            fillInField: 'Заполните поля данными и нажмите кнопку внизу',
            sentTitle: 'Помощь с выбором кухни',
            sentSuccessfully: 'Ваша заявка была успешно отправлена на обработку!\nВскоре с вами свяжутся.',
            sentNotSuccessfully: 'Во время отправки произошла ошибка. Попробуйте позже.',
            btnPreview: 'Обратно',
            btnNext: 'Вперед',
            bntFinal: 'Завершить',
        },
        de: {
            title: 'Berechnen Sie, wie viel die Küche kosten wird.',
            subTitle: 'Geben Sie die Parameter an, damit der Spezialist Ihnen vorab mehrere Optionen anbieten und sich am Preis orientieren kann',
            selectFromListBelow: 'Wählen Sie aus der Liste unten aus, was Ihnen gefällt, und klicken Sie auf die Schaltfläche unten',
            fillInField: 'Füllen Sie die Felder mit Daten aus und klicken Sie auf die Schaltfläche unten',
            sentTitle: 'Hilfe bei der Küchenauswahl',
            sentSuccessfully: 'Ihre Bewerbung wurde erfolgreich zur Bearbeitung weitergeleitet! Sie werden in Kürze kontaktiert.',
            sentNotSuccessfully: 'Beim Senden ist ein Fehler aufgetreten. Versuchen Sie es später erneut.',
            btnPreview: 'Zurück',
            btnNext: 'Nach vorne',
            bntFinal: 'Fertigstellen',
        },
    },
    ourWorks: {
        ua: {
            title: 'Наші роботи',
            btnMore: 'Показати більше',
        },
        ru: {
            title: 'Наши работы',
            btnMore: 'Показать больше',
        },
        de: {
            title: 'Unsere Arbeiten',
            btnMore: 'Zeig mehr',
        },
    },

    pageHome: {
        ua: {
            title: 'Салон меблів',
            subTitle: 'Купуючи у виробника, Ви економите до 40% на вартості меблів.',
        },
        ru: {
            title: 'Салон мебели',
            subTitle: 'Покупая у производителя, вы экономите до 40% на стоимости мебели.',
        },
        de: {
            title: 'Möbelsalon',
            subTitle: 'Durch den Kauf beim Hersteller sparen Sie bis zu 40 % der Möbelkosten.',
        },
    },
    pageKitchenModern: {
        ua: {
            title: 'Кухні в стилі модерн',
        },
        ru: {
            title: 'Кухни в стиле модерн',
        },
        de: {
            title: 'Küchen im modernen Stil',
        },
    },
    pageKitchenNaturalWood: {
        ua: {
            title: 'Кухні із натурального дерева',
        },
        ru: {
            title: 'Кухни из натурального дерева',
        },
        de: {
            title: 'Küchen aus Naturholz',
        },
    },
    pageKitchenProfileMDF: {
        ua: {
            title: 'Кухні із профільного МДФ',
        },
        ru: {
            title: 'Кухни из профильного МДФ',
        },
        de: {
            title: 'Küchen aus profiliertem MDF',
        },
    },
    pageMdfKitchens: {
        ua: {
            title: 'Кухні МДФ із фрезеруванням',
        },
        ru: {
            title: 'Кухни МДФ с фрезерованием',
        },
        de: {
            title: 'MDF-Küchen mit Fräsen',
        },
    }, pageWardrobesClassic: {
        ua: {
            title: 'Шафи Класика',
        },
        ru: {
            title: 'Шкафы Классика',
        },
        de: {
            title: 'Klassische Kleiderschränke',
        },
    }, pageWardrobesModern: {
        ua: {
            title: 'Шафи Модерн',
        },
        ru: {
            title: 'Шкафы Модерн',
        },
        de: {
            title: 'Moderne Kleiderschränke',
        },
    }, pageNotFound: {
        ua: {
            title: 'Сторінку не знайдено 404',
        },
        ru: {
            title: 'Страница не найдена 404',
        },
        de: {
            title: 'Seite nicht gefunden 404',
        },
    },

};


export default translates;