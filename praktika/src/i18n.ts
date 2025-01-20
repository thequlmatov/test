import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Tarjima fayllarini yuklash
  .use(LanguageDetector) // Brauzer tilini aniqlash
  .use(initReactI18next) // React bilan integratsiya qilish
  .init({
    fallbackLng: 'en', // Agar til aniqlanmasa, inglizcha ishlatiladi
    debug: true, // Ishlab chiqish jarayonida xatoliklarni ko‘rish
    interpolation: {
      escapeValue: false, // React XSS'dan himoya qiladi
    },
    backend: {
      loadPath: '/locales/{{lng}}.json', // Tarjima fayllari joylashgan yo‘l
    },
  });

export default i18n;
