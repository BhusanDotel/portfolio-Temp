import React, { useEffect, useState } from "react";
import AboutText from "./AboutText";
import { myservices } from "./MyServices";
import { useInView } from "react-intersection-observer";
import Tech from "./Tech";

import "./About.css";

function About() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <>
      <div className="about-root-container">
        <div className="about-intro-container">
          <div className="about-title-text">
            <AboutText />
          </div>
          <h3 className="about-overview-text">Overview.</h3>
          <p ref={ref} className="about-me-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
          </p>
          <p className="about-service-text">
            Following are the services i can provide.
          </p>
          <div ref={ref} className="services-container">
            {myservices.map((items, i) => {
              return (
                <div
                  key={i}
                  className={`service-card ${
                    animate ? items.animate_classname : ""
                  }`}
                >
                  <img
                    className="service-card-img"
                    src={items.icon}
                    alt={items.name}
                  />
                  <p className="service-card-name">{items.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="about-skills-container">
        <Tech />
      </div>
    </>
  );
}

export default About;
