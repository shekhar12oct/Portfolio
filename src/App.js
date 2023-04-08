import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SocialLink from "./components/SocialLink";

const App = () => {
  return (
   <>
   <NavBar/>
   <Home />
   <About />
   <PortFolio />
   <Experience />
   <Contact />
   <SocialLink />
   </>
);
};

export default App;
