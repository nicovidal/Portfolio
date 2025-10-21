import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 🌍 Traducciones
const resources = {
  ES: {
    translation: {
      // 🧭 Navbar
      inicio: "Inicio",
      sobreMi: "Sobre mí",
      proyectos: "Proyectos",
      contacto: "Contacto",

      // 🏠 Home
      saludo: "Hola, soy Nicolás Vidal",
      descripcion: "Desarrollador Full Stack",
      about:
        "Soy un desarrollador Full Stack apasionado por crear soluciones modernas y eficientes, tanto en backend como frontend. He participado en proyectos de los sectores bancario y retail, aportando consultoría técnica y desarrollando aplicaciones escalables. Me interesa el desarrollo web y mobile, y estoy en constante mejora aprendiendo nuevas tecnologías para seguir creciendo profesionalmente.",

      // 🧱 Filtros de proyectos
      filtro: {
        todos: "Todos",
        personales: "Personales",
        profesionales: "Profesionales",
        practica: "Práctica",
        ariaLabel: "Filtros de proyectos",
      },

      // 💼 Proyectos
      projects: {
        portfolio: {
          title: "Portfolio Web",
          description:
            "Mi portafolio personal en React, mostrando proyectos y habilidades.",
        },
        bankApp: {
          title: "Aplicación Bancaria",
          description:
            "Aplicación de ejemplo para gestión de cuentas y transacciones.",
        },
        ecommerce: {
          title: "E-commerce",
          description:
            "Proyecto de tienda online con carrito y pasarela de pago.",
        },
      },

      // 🧩 Textos comunes
      verProyecto: "Ver proyecto",
      tecnologiasUsadas: "Tecnologías usadas",

      // 💌 Contacto
      contact: {
        title: "Contáctame",
        nameLabel: "Nombre",
        namePlaceholder: "Tu nombre",
        emailLabel: "Correo electrónico",
        emailPlaceholder: "tu@correo.com",
        messageLabel: "Mensaje",
        messagePlaceholder: "Escribe tu mensaje aquí...",
        sendButton: "Enviar mensaje",
      },
    },
  },

  EN: {
    translation: {
      // 🧭 Navbar
      inicio: "Home",
      sobreMi: "About Me",
      proyectos: "Projects",
      contacto: "Contact",

      // 🏠 Home
      saludo: "Hi, I'm Nicolás Vidal",
      descripcion: "Full Stack Developer",
      about:
        "I am a Full Stack Developer passionate about building modern and efficient solutions in both backend and frontend. I have worked on banking and retail sector projects, providing technical consulting and developing scalable applications. I am interested in web and mobile development, and I am constantly learning new technologies to continue improving professionally.",

      // 🧱 Project filters
      filtro: {
        todos: "All",
        personales: "Personal",
        profesionales: "Professional",
        practica: "Practice",
        ariaLabel: "Project filters",
      },

      // 💼 Projects
      projects: {
        portfolio: {
          title: "Web Portfolio",
          description:
            "My personal portfolio built with React, showcasing projects and skills.",
        },
        bankApp: {
          title: "Banking App",
          description:
            "Example app for managing accounts and transactions.",
        },
        ecommerce: {
          title: "E-commerce",
          description:
            "Online store project with shopping cart and payment gateway.",
        },
      },

      // 🧩 Common
      verProyecto: "View project",
      tecnologiasUsadas: "Technologies used",

      // 💌 Contact
      contact: {
        title: "Contact Me",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        messageLabel: "Message",
        messagePlaceholder: "Write your message here...",
        sendButton: "Send Message",
      },
    },
  },

  JP: {
    translation: {
      // 🧭 ナビバー
      inicio: "ホーム",
      sobreMi: "私について",
      proyectos: "プロジェクト",
      contacto: "連絡先",

      // 🏠 ホーム
      saludo: "こんにちは、ニコラス・ビダルです",
      descripcion: "フルスタック開発者",
      about:
        "私はバックエンドとフロントエンドの両方でモダンで効率的なソリューションを作ることに情熱を持つフルスタック開発者です。銀行および小売業界のプロジェクトに参加し、技術的なコンサルティングを提供し、スケーラブルなアプリケーションを開発してきました。Webとモバイルの開発に強い関心を持ち、常に新しい技術を学びながら成長し続けています。",

      // 🧱 プロジェクトフィルター
      filtro: {
        todos: "すべて",
        personales: "個人",
        profesionales: "プロフェッショナル",
        practica: "練習",
        ariaLabel: "プロジェクトフィルター",
      },

      // 💼 プロジェクト
      projects: {
        portfolio: {
          title: "ポートフォリオサイト",
          description:
            "Reactで作成した個人ポートフォリオ。プロジェクトとスキルを紹介します。",
        },
        bankApp: {
          title: "バンキングアプリ",
          description: "口座と取引を管理するサンプルアプリケーション。",
        },
        ecommerce: {
          title: "Eコマース",
          description: "ショッピングカートと決済機能を備えたオンラインストアプロジェクト。",
        },
      },

      // 🧩 共通
      verProyecto: "プロジェクトを見る",
      tecnologiasUsadas: "使用技術",

      // 💌 連絡フォーム
      contact: {
        title: "お問い合わせ",
        nameLabel: "お名前",
        namePlaceholder: "あなたの名前",
        emailLabel: "メールアドレス",
        emailPlaceholder: "your@email.com",
        messageLabel: "メッセージ",
        messagePlaceholder: "ここにメッセージを入力してください...",
        sendButton: "送信する",
      },
    },
  },
};

// 🚀 Inicialización de i18next
i18n.use(initReactI18next).init({
  resources,
  lng: "ES", // idioma inicial
  fallbackLng: "ES",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
