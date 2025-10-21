import { Home } from "../components/Home/Home";
import { Navbar } from "../components/NavBar/NavBar";
import { AboutMe } from "../components/AboutMe/AboutMe";

export const MainPage = () => {
  return (
    <>
      <Navbar />

      <Home />

      <AboutMe />

      <section
        id="proyectos"
        className="vh-100 d-flex align-items-center justify-content-center bg-light"
      >
        <h2>Proyectos</h2>
      </section>

      <section
        id="contacto"
        className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white"
      >
        <h2>Contacto</h2>
      </section>
    </>
  );
};
