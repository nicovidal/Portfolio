import { useTranslation } from "react-i18next";
import Background from "../../assets/BackGround_intro.jpg";
import "./Home.css";

export const Home = () => {
  const { t } = useTranslation();

  // Lista de tecnologías
  const tecnologias = ["Node.js", "React", "Express", "Spring Boot", "NestJS"];

  return (
    <section
      id="home"
      className="home-section vh-100 d-flex flex-column align-items-center justify-content-center text-center"
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

        {/* Subtítulo con gradient */}
        <p className="home-subtitle">{t("descripcion")}</p>

        {/* Texto adicional */}
        <p className="home-about">{t("about")}</p>

        {/* Tecnologías */}
        <h2 className="tech-title">Tecnologías</h2>
        <div className="tech-container">
          {tecnologias.map((tech, index) => (
            <span key={index} className="tech-item">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
