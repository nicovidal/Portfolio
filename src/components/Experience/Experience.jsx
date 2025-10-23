import "./Experience.css";
import { useTranslation } from "react-i18next";
import Background from "../../assets/BackGround_intro.jpg";
import enaccionLogo from "../../assets/enaccion_consultores_logo.jpg";
import licitalabLogo from "../../assets/licitalab_logo.jpg";

export const Experience = () => {
  const { t } = useTranslation();

  // Obtenemos la lista de experiencias según el idioma activo
  const experiences = t("experience.experiencesList", { returnObjects: true });

  return (
    <section
      id="experience"
      className="experience-section section-full"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div className="overlay" style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        zIndex: 1,
      }}/>

      <div className="experience-content" style={{ zIndex: 2, position: "relative" }}>
        <h2 className="section-title">{t("experience.sectionTitle")}</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-logo">
                <img src={index < 2 ? enaccionLogo : licitalabLogo} alt={exp.company} />
              </div>
              <div className="timeline-content">
                <h3 className="company">{exp.company}</h3>
                <p className="role">{exp.role}</p>
                <p className="date-location">{exp.date} | {exp.location}</p>
                <p className="description">{exp.description}</p>
                <div className="skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
