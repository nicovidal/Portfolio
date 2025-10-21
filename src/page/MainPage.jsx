import { Home } from "../components/Home/Home";
import { Navbar } from "../components/NavBar/NavBar";
import { Proyect } from "../components/Project/Proyect";
import { Experience } from "../components/Experience/Experience";
import { Contact } from "../components/Contact/Contact";

export const MainPage = () => {
  return (
    <>
      <Navbar />

      <Home />

      <Experience />

      <Proyect/>

      <Contact/>
    </>
  );
};
