import { Fragment } from "react";
import Navbar from "./components/navbar.component";
import About from "./components/about.component";
import Contact from "./components/contact.component";
import Hero from "./components/hero.component";
import Resume from "./components/resume.component";
import Skills from "./components/skills.component";
import Technologies from "./components/technologies.component";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Technologies />
      <Contact />
    </Fragment>
  );
}

export default App;
