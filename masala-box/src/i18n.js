import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './locales/en/translation.json'
import translationMA from './locales/ma/translation.json'
import translationHI from './locales/hi/translation.json'
import translationFR from './locales/fr/translation.json'
import translationAR from './locales/ar/translation.json'
i18n
.use(initReactI18next)
.init({
    resources:{
        en:{translation:translationEN},
        ma:{translation:translationMA},
        hi:{translation:translationHI},
        fr:{translation:translationFR},
        ar:{translation:translationAR},
    },
    fallbackLng:'en',
    debug:true,
    interpolation:{
        escapeValue:false,
    }
})
export default i18n;