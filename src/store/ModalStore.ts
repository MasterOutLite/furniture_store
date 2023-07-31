import {create} from "zustand";

interface ModalStore {
    callBack: boolean;
    showCallBack: () => void;
    hideCallBack: () => void;
}

const useModalStore = create<ModalStore>((set, get) => ({
    callBack: false,
    showCallBack() {
        set({callBack: true});
    },
    hideCallBack() {
        set({callBack: false});
    },

}));

export default useModalStore;