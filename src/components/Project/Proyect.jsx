// src/components/Proyect.jsx
import React, { useState } from "react";
import { CardProject } from "./CardProject";
import { useTranslation } from "react-i18next";
import Background from "../../assets/BackGround_intro.jpg";
import "./Proyect.css";

const projectsData = [
  {
    key: "portfolio",
    image: "https://via.placeholder.com/300x180",
    link: "#",
    category: "personal",
  },
  {
    key: "bankApp",
    image: "https://via.placeholder.com/300x180",
    link: "#",
    category: "profesional",
  },
  {
    key: "ecommerce",
    image: "https://via.placeholder.com/300x180",
    link: "#",
    category: "practica",
  },
];

export const Proyect = () => {
  const [filter, setFilter] = useState("todos");
  const { t } = useTranslation();

  const filteredProjects =
    filter === "todos"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section
      id="proyect"
      className="projects-section section-full"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      
      <h2 className="section-title">{t("proyectos")}</h2>

      {/* 🔘 Botones de filtro */}
      <div
        className="filter-buttons"
        role="tablist"
        aria-label={t("filtro.ariaLabel")}
      >
        <button
          className={filter === "todos" ? "active" : ""}
          onClick={() => setFilter("todos")}
          type="button"
        >
          {t("filtro.todos")}
        </button>

        <button
          className={filter === "personal" ? "active" : ""}
          onClick={() => setFilter("personal")}
          type="button"
        >
          {t("filtro.personales")}
        </button>

        <button
          className={filter === "profesional" ? "active" : ""}
          onClick={() => setFilter("profesional")}
          type="button"
        >
          {t("filtro.profesionales")}
        </button>

        <button
          className={filter === "practica" ? "active" : ""}
          onClick={() => setFilter("practica")}
          type="button"
        >
          {t("filtro.practica")}
        </button>
      </div>

      {/* 🧱 Cards filtradas */}
      <div className="projects-container">
        {filteredProjects.map((project) => (
          <CardProject
            key={project.key}
            title={t(`projects.${project.key}.title`)}
            description={t(`projects.${project.key}.description`)}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
