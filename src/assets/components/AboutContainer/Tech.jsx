import BallCanvas from "../canvas/Ball";
import { technologies } from "./MySkills";
import { deviceType } from "../../utils/DeviceType";

import "./Tech.css";

const Tech = () => {
  return (
    <>
      <div className="tech-root-container">
        <div className="myskill-text-container">
          <h2 className="myskill-text">My skills.</h2>
        </div>

        <div className="tech-balls-container">
          {technologies.map((technology) => (
            <div className="ball-container" key={technology.name}>
              {deviceType !== "Android" ? (
                <BallCanvas icon={technology.icon} />
              ) : (
                <div className="skills-container-android">
                  <div className="skills-background">
                    <img
                      className="android-skill-image"
                      src={technology.icon}
                      alt=""
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tech;
