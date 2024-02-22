import React, { useContext, useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import NavLogo from "./NavLogo";
import HamburgerMenu from "./HamburgerMenu";
import { StateContext } from "../../context/StateContext";
import "./Nav.css";

function Nav() {
  const { visibleDiv } = useContext(StateContext);
  const [hoverclass, setHoverClass] = useState("");
  const [activeClass, setActiveClass] = useState("");
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isHiddenAnimation, setHiddenAnimation] = useState(false);
  const [isHamBlack, setHamBlack] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [navVisible, setNavVisible] = useState(true);
  const [isChecked, setChecked] = useState(false);

  const handleClick = () => {
    if (isMenuVisible === false) {
      setChecked(true);
      setMenuVisible(true);
      setHiddenAnimation(false);
      setHamBlack(true);
    } else {
      setChecked(false);
      setHiddenAnimation(true);
      setTimeout(() => {
        setMenuVisible(false);
      }, 700);
      setHamBlack(false);
    }
  };

  useEffect(() => {
    setActiveClass(visibleDiv);
  }, [visibleDiv]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToElement = (elementId) => {
    scroll.scrollTo(document.querySelector(`.${elementId}`).offsetTop, {
      smooth: true,
      offset: -200,
    });
  };

  return (
    <>
      <header
        className={`${navVisible ? "nav-main-root" : "nav-main-root-hide"}`}
      >
        <div
          className="nav-left-section"
          to="landing-container-root"
          onClick={() => {
            scrollToElement("landing-container-root");
            setActiveClass("Home");
          }}
        >
          <NavLogo />
        </div>
        <nav className="nav-mid-gap"></nav>
        <nav className="nav-right-section">
          <div className="nav-links">
            <Link
              onMouseEnter={() => {
                setHoverClass("About");
              }}
              onMouseLeave={() => {
                setHoverClass("");
              }}
              className="navlink navlink-about"
              to="about-root-container"
              spy={true}
              smooth={true}
              onClick={() => {
                scrollToElement("about-root-container");
                setActiveClass("About");
              }}
            >
              About
            </Link>

            <Link
              onMouseEnter={() => {
                setHoverClass("Projects");
              }}
              onMouseLeave={() => {
                setHoverClass("");
              }}
              className="navlink navlink-projects"
              to="project-root-container"
              spy={true}
              smooth={true}
              onClick={() => {
                scrollToElement("project-root-container");
                setActiveClass("Projects");
              }}
            >
              Projects
            </Link>

            <Link
              onMouseEnter={() => {
                setHoverClass("Contact");
              }}
              onMouseLeave={() => {
                setHoverClass("");
              }}
              className="navlink navlink-contact"
              to="contact-root-container"
              spy={true}
              smooth={true}
              onClick={() => {
                scrollToElement("contact-root-container");
                setActiveClass("Contact");
              }}
            >
              Contact
            </Link>
          </div>
          <hr className={`hovered-${hoverclass ? hoverclass : activeClass}`} />
        </nav>

        <div className="hamburger-menu">
          <HamburgerMenu
            key={1}
            handleClick={handleClick}
            isHamBlack={isHamBlack}
            isChecked={isChecked}
          />
        </div>

        {isMenuVisible && (
          <div
            className={`ham-menu-root ${isHiddenAnimation ? "hidden" : ""} `}
          >
            <div className="menu-option-container">
              <span
                className="menu-option"
                onClick={() => {
                  scrollToElement("about-root-container");
                  setActiveClass("About");
                  setMenuVisible(false);
                  setHamBlack(false);
                  setChecked(false);
                }}
              >
                About
              </span>
              <span
                className="menu-option"
                onClick={() => {
                  scrollToElement("project-root-container");
                  setActiveClass("Projects");
                  setMenuVisible(false);
                  setHamBlack(false);
                  setChecked(false);
                }}
              >
                Projects
              </span>
              <span
                className="menu-option"
                onClick={() => {
                  scrollToElement("contact-root-container");
                  setActiveClass("Contact");
                  setMenuVisible(false);
                  setHamBlack(false);
                  setChecked(false);
                }}
              >
                Contact
              </span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Nav;
