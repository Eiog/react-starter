import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import cn from '~/locales/zh_cn.json'
import en from '~/locales/en_us.json'

function useI18n() {
  return i18n.use(LanguageDetector).use(initReactI18next)
    .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources: {
        en: {
          translation: en,
        },
        cn: {
          translation: cn,
        },
      },
      lng: 'en', // if you're using a language detector, do not define the lng option
      fallbackLng: 'en',

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    })
}
export default useI18n
