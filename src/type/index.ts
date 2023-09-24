export interface KitchenImg {
    img: string;
    title: string;

}

export interface KitchenImgWithTranslate extends KitchenImg {
    translate: Translate;
}

export type KitchenSelection = {
    items: KitchenImg[];
    title: string;
    selectItem: number;
}

export type FurnitureStyle = {
    title: { [key: string]: string };
    subTitle: { [key: string]: string };
    img: string;
    hRef: string;
}

export type Question = {
    required?: boolean;
    type: string;
    answer: string;
    invalid?: boolean;
    inputType: string;
    question: { [key: string]: string };
}

export type Answer = {
    type: string;
    answer: string;
}

export type HelperSelectType = {
    title: { [key: string]: string };
    type: string;
    typeHelper:
        {
            type: 'selectImg',
            show: KitchenImgWithTranslate[],
            answer: string;
        } |
        {
            type: 'question',
            show: Question[],
            answer: string;
        } |
        {
            type: 'select',
            show: { [key: string]: string[] },
            answer: string;
        } |
        {
            type: 'callback',
            show: Question[],
            answer: string;
        }
}

export enum VariantBg {
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    danger = 'danger',
    warning = 'warning',
    info = 'info',
    light = 'light',
    dark = 'dark',
}

export type ToastItemType = {
    id: string | number,
    title: string,
    body: string,
    bg?: VariantBg,
    data?: string,
}

export type Translate = {
    // key - language (ua, en, fr,...)
    [key: string]: {
        //key - were need in html | value - translate
        [key: string]: string
    };
}

export type SelectTranslate = {
    //key - components
    [key: string]: Translate;
}

export enum Language {
    ua = 'ua',
    ru = 'ru',
    de = 'de'
}
