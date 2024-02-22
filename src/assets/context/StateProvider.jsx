import React, { useState, useEffect } from "react";
import { StateContext } from "./StateContext";

export const StateProvider = (props) => {
  const [screenWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleDiv, setVisibleDiv] = useState("");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Get the top offset of each div
    const Home =
      document.querySelector(".landing-container-root").offsetTop - 200;
    const About =
      document.querySelector(".about-root-container").offsetTop - 200;
    const Projects =
      document.querySelector(".project-root-container").offsetTop - 200;
    const Contact =
      document.querySelector(".contact-root-container").offsetTop - 200;

    // Determine which div is currently visible
    if (scrollPosition >= Home && scrollPosition < About) {
      setVisibleDiv("Home");
    } else if (scrollPosition >= About && scrollPosition < Projects) {
      setVisibleDiv("About");
    } else if (scrollPosition >= Projects && scrollPosition < Contact) {
      setVisibleDiv("Projects");
    } else {
      setVisibleDiv("Contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    function generateSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", generateSize);

    return function () {
      window.removeEventListener("resize", generateSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StateContext.Provider
      value={{
        screenWidth,
        visibleDiv,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};
