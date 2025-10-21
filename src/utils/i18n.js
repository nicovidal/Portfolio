import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traducciones
const resources = {
  ES: {
    translation: {
      inicio: "Inicio",
      sobreMi: "Sobre mí",
      proyectos: "Proyectos",
      contacto: "Contacto",
      saludo: "Hola, soy Nicolás Vidal",
      descripcion: "Desarrollador Full Stack",
    },
  },
  EN: {
    translation: {
      inicio: "Home",
      sobreMi: "About Me",
      proyectos: "Projects",
      contacto: "Contact",
      saludo: "Hi, I'm Nicolás Vidal",
      descripcion: "Full Stack Developer",
    },
  },
  JP: {
    translation: {
      inicio: "ホーム",
      sobreMi: "私について",
      proyectos: "プロジェクト",
      contacto: "連絡先",
      saludo: "こんにちは、ニコラス・ビダルです",
      descripcion: "フルスタック開発者",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ES",
  fallbackLng: "ES",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
