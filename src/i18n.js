import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.translation.json';
import bg from './locales/bg.translation.json';
import ru from './locales/ru.translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      bg: { translation: bg },
      ru: { translation: ru },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
