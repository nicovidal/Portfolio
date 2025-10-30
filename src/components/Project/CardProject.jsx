import React from "react";
import { useTranslation } from "react-i18next";
import "./CardProject.css";

export const CardProject = ({ title, subtitle,description, image, link }) => {
  const { t } = useTranslation();

  return (
    <div className="card-project">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <h3 className="card-subtitle">{subtitle}</h3>
        <p className="card-description">{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
            {t("projects.viewProject")}
          </a>
        )}
        <p>{t("projects.technologiesUsed")}</p>
      </div>
    </div>
  );
};
