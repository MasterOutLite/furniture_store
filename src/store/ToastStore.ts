import {create} from 'zustand'
import {ToastItemType, VariantBg} from "../type";

interface ToastStore {
    toasts: ToastItemType[];
    addToast: (title: string, body: string, bg?: VariantBg, dataNow?: boolean) => void;
    removeToast: (id: number | string) => void;
}

const useToastStore = create<ToastStore>((set, get) => ({

    toasts: [],
    addToast: (title, body, bg, dataNow = true) => {
        const toastsOld = get().toasts;
        const data = dataNow ? new Date().toLocaleTimeString() : undefined;
        const id = Math.floor(Math.random() * 1000) + 1;
        set({toasts: [...toastsOld, {id, title, body, bg, data}]});
    },
    removeToast: (id) => {
        const toasts = get().toasts;
        const newToast = toasts.filter(value => value.id !== id)
        set({toasts: newToast});
    }
}))

export default useToastStore;