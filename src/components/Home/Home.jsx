import { useTranslation } from "react-i18next";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiSpringboot,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import Background from "../../assets/BackGround_intro.jpg";
import "./Home.css";

export const Home = () => {
  const { t } = useTranslation();

  // Lista de tecnologías
  const tecnologias = [
    { name: "Angular", icon: <FaAngular color="#E0234E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
    { name: "NestJS", icon: <SiNestjs color="#E0234E" /> },
    { name: "Express", icon: <SiExpress color="#ffffff" /> },
    { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
    { name: "MongoDB", icon: <SiMongodb color="#23e033ff" /> },
    { name: "PostgresSQL", icon: <SiPostgresql color="#236fe0ff" /> },
  ];

  return (
    <section
      id="home"
      className="home-section vh-100 d-flex flex-column align-items-center justify-content-center text-center section-full"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Overlay oscuro */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />

      <div style={{ zIndex: 2 }}>
        {/* Nombre */}
        <h1 className="home-name">{t("saludo")}</h1>

        <p className="home-title">{t("carrera")}</p>

        {/* Subtítulo con gradient */}
        <p className="home-subtitle">{t("descripcion")}</p>

        {/* Texto adicional */}
        <p className="home-about">{t("about")}</p>

        {/* Tecnologías */}
        <h2 className="tech-title">Tecnologías</h2>
        <div className="tech-container">
          {tecnologias.map((tech, index) => (
            <div key={index} className="tech-item">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="cv-container">
          <a
            href="/CV_Nicolas_Vidal.pdf"
            download="Nicolas_Vidal_CV.pdf"
            className="cv-button"
          >
            {t("DescargarCV")}
          </a>
        </div>
      </div>
    </section>
  );
};
