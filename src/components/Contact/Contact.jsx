import  { useState } from "react";
import { useTranslation } from "react-i18next";
import Background from "../../assets/BackGround_intro.jpg";
import "./Contact.css";

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="contact-section section-full"
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
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      />

      {/* Contenido */}
      <div style={{ zIndex: 2, position: "relative", width: "100%" }}>
        <h2 className="section-title">{t("contact.title")}</h2>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{t("contact.nameLabel")}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("contact.namePlaceholder")}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t("contact.emailLabel")}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("contact.emailPlaceholder")}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t("contact.messageLabel")}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t("contact.messagePlaceholder")}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-button">
              {t("contact.sendButton")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
