import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";

import translationCyril from "assets/locales/cyril/translation.json";
import translationRu from "assets/locales/ru/translation.json";
import translationLatin from "assets/locales/latin/translation.json";
import { languages } from "config";
import { Languages } from "types";

// https://www.i18next.com/overview/configuration-options

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    keySeparator: "|",
    resources: {
      cyril: {
        translation: translationCyril,
      },
      ru: {
        translation: translationRu,
      },
      latin: {
        translation: translationLatin,
      },
    },
    fallbackLng: languages,
    detection: {
      order: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
    supportedLngs: languages,
  });

export default i18n;

// type LangLocalsKeys = "Uz" | "Ru";

// const localEntries: Record<Languages, LangLocalsKeys> = {
//   uz: "Uz",
//   ru: "Ru",
// };

// export const getLocaleName = <T extends string>(name: T): `${T}${LangLocalsKeys}` => {
//   const currLang = (i18n.language as Languages) ?? "Uz";

//   return `${name}${localEntries?.[currLang]}`;
// };
