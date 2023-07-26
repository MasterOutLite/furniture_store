export type KitchenImg = {
    img: string;
    title: string;
};

export type KitchenSelection = {
    items: KitchenImg[];
    title: string;
    selectItem: number;
}

export type FurnitureStyle = {
    title: string;
    subTitle: string;
    img: string;
    hRef: string;
}

export type Question = {
    required?: boolean;
    question: string;
    type: string;
    inputType: string;
    answer: string;
    invalid?: boolean;
}

export type Answer = {
    type: string;
    answer: string;
}

export type HelperSelectType = {
    title: string;
    type: string;
    typeHelper:
        {
            type: 'selectImg',
            show: KitchenImg[],
            answer: string;
        } |
        {
            type: 'question',
            show: Question[],
            answer: string;
        } |
        {
            type: 'select',
            show: string[],
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