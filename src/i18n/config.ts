import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.team": "Team",
      "nav.connect": "Connect",
      // Add more translations as needed
    },
  },
  es: {
    translation: {
      "nav.home": "Inicio",
      "nav.about": "Sobre Nosotros",
      "nav.team": "Equipo",
      "nav.connect": "Conectar",
      // Add more translations as needed
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n