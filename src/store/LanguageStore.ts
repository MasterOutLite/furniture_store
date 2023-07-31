import {create} from "zustand";
import {Language, SelectTranslate} from "../type";
import translates from "../helpers/constants/translates";


interface LanguageStore {
    language: Language;
    setLanguage: (lan: Language) => void;
    translate: SelectTranslate;
}

const useLanguageStore = create<LanguageStore>((set, get) => (
    {
        language: Language.ua,
        translate: translates,
        setLanguage(language){
            set({language});
        }
    }
));

export default useLanguageStore;
