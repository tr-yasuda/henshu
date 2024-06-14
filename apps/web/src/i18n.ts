import { en } from '@/locales/en.ts'
import { ja } from '@/locales/ja.ts'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    resources: {
      en,
      ja,
    },
  })

export default i18n
