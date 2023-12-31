import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
