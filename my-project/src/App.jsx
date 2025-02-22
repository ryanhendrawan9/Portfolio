import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="overflow-hidden">
      <Navbar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        toggleMenu={toggleMenu}
      />
      <Hero />
      <About />
      <Education />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
