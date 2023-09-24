import {create} from "zustand";
import {Language, SelectTranslate} from "src/type";
import translates from "src/helpers/constants/translates";


interface LanguageStore {
    language: Language;
    setLanguage: (lan: Language) => void;
    translate: SelectTranslate;
}

const useLanguageStore = create<LanguageStore>((set, get) => (
    {
        language: Language.de,
        translate: translates,
        setLanguage(language){
            set({language});
        }
    }
));

export default useLanguageStore;
