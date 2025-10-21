import { Link } from "react-scroll";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark p-2 fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand">Nicolás</div>

        <div className="navbar-collapse d-flex justify-content-center">
          <div className="navbar-nav">
            <Link
              className="nav-item nav-link"
              to="home"
              /*               smooth={true} */
              duration={700}
              offset={-70}
            >
              Inicio
            </Link>
            <Link
              className="nav-item nav-link"
              to="sobre-mi"
              /*        smooth={true} */
              duration={700}
              offset={-70}
            >
              Sobre mí
            </Link>
            <Link
              className="nav-item nav-link"
              to="proyect"
              /*       smooth={true} */
              duration={700}
              offset={-70}
            >
              Proyectos
            </Link>
            <Link
              className="nav-item nav-link"
              to="contact"
              /*              smooth={true} */
              duration={700}
              offset={-70}
            >
              Contacto
            </Link>
          </div>
        </div>

        {/* Botón de idioma */}
        <div className="d-flex align-items-center">
          <select
            className="form-select form-select-sm"
            onChange={(e) => handleChangeLanguage(e.target.value)}
          >
            <option value="ES">ES 🇪🇸</option>
            <option value="EN">EN 🇬🇧</option>
            <option value="JP">JP 🇯🇵</option>
          </select>
        </div>
      </div>
    </nav>
  );
};
