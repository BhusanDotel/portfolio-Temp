import React, { useContext, useState } from "react";
import { StateContext } from "../../context/StateContext";
import "./projectCard.css";

function ProjectCard(props) {
  const { screenWidth } = useContext(StateContext);
  const [isProjectCardClicked, setProjectCardClicked] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => {
          screenWidth > 1300 ? setProjectCardClicked(true) : console.log("");
        }}
        onMouseLeave={() => {
          screenWidth > 1300 ? setProjectCardClicked(false) : console.log("");
        }}
        onClick={() => {
          screenWidth < 1300
            ? setProjectCardClicked((prevState) => {
                return !prevState;
              })
            : console.log("");
        }}
        style={{
          backgroundImage: `url(${props.image})`,
        }}
        className={`project-card ${props.inView ? props.className : ""} ${
          isProjectCardClicked ? `project-card-big ${props.className}-big` : ""
        }`}
      >
        {!isProjectCardClicked && (
          <p className="project-name-rotated">{props.name}</p>
        )}
        {isProjectCardClicked && (
          <div className="project-card-data">
            <div
              className="github-icon-div"
              onClick={() => {
                window.open(props.srcCode, "_blank");
              }}
            >
              <img
                className="project-git-icon"
                src="/images/github.png"
                alt=""
              />
            </div>
            <h2 className="project-name-card-data">{props.name}</h2>
            <hr className="hr-line" />
            <p className="project-description">{props.description}</p>
            <hr className="hr-line" />
            <div className="project-button-container">
              <button
                onClick={() => {
                  window.open(props.url, "_blank");
                }}
                className="live-demo-btn"
              >
                Live Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectCard;
