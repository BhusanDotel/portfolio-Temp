import React, { useEffect, useState } from "react";
import Light from "./Light";
import { useInView } from "react-intersection-observer";
import "./LightBulbGroup.css";

function LightBulbGroup() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  //to load glow bulb image initially so that , when real glowing image do not need to load again so it is set true
  const [isGlow, setGlow] = useState(true);

  useEffect(() => {
    setGlow(false);
  }, []);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setGlow(inView);
      }, 700);
    } else {
      setGlow(inView);
    }
  }, [inView]);

  return (
    <main
      className={`bulb-main-root ${
        isGlow ? "bulb-main-root-glow" : "bulb-main-root-notglow"
      } `}
    >
      <div className="bulb-and-text-container">
        <div className="bulb-container">
          <img
            className="bulb-image"
            src={`./images/${isGlow ? "glow" : "notglow"}.png`}
            alt=""
          />
        </div>
      </div>
      {isGlow && (
        <div className="light-container">
          <Light />
        </div>
      )}
      <button
        onClick={() => {
          window.open("#", "_blank");
        }}
        ref={ref}
        className={`hire-me-btn ${isGlow ? "btn-glow" : ""}`}
      >
        <img
          className="download-icon"
          src={`/images/download-${isGlow ? "glow" : "notglow"}.png`}
          alt=""
        />
        Resume
      </button>
    </main>
  );
}

export default LightBulbGroup;
