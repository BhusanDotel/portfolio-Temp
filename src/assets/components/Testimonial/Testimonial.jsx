import React, { useEffect, useState } from "react";
import { testimonyData } from "./TestimonyData";
import { useInView } from "react-intersection-observer";
import "./Testimonial.css";

function Testimonial() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  const testimonyRenderArray = testimonyData.map((data, index) => {
    return (
      <div key={index} className={`testimony-card testimony-card-${data.name}`}>
        <div className="testimony-image-container">
          <img className="testimony-image" src={data.image} alt="" />
        </div>
        <h3 className="testimony-name">{data.name}</h3>
        <p className="testimony-position-text">{data.position}</p>
        <p className="testimony-paragraph">{data.testimonyText}</p>
        <div className="rating-container">
          <img className="testimony-star" src={data.star} alt="" />
        </div>
      </div>
    );
  });

  return (
    <div ref={ref} className="testimony-root-container-root">
      <h2 className="testimonial-title">
        People say the nicest things <span className="emoji">☺</span>
      </h2>
      {animate && (
        <div className="testimony-card-container">{testimonyRenderArray}</div>
      )}
    </div>
  );
}

export default Testimonial;
