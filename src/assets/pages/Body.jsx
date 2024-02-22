import React from "react";
import LandingContainer from "../components/LandingContainer/LandingContainer";
import About from "../components/AboutContainer/About";
import ProjectContainer from "../components/ProjectsContainer/ProjectContainer";
import Testimonial from "../components/Testimonial/Testimonial";
import Contact from "../components/Contact/Contact";
import "./Body.css";

function Body() {
  return (
    <div className="not-nav-root-container">
      <LandingContainer />
      <About />
      <ProjectContainer />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default Body;
