import React from "react";
import RotatedText from "./RotatedText";
import NameText from "./NameText";
import MyDp from "./MyDp";
import ScrollDown from "./ScrollDown";
import "./LandingContainer.css";

function LandingContainer() {
  return (
    <div>
      <main className="landing-container-root">
        <aside className="mernstack-text-container m-t-c-animate">
          <div className="m-t-c-animate">
            <RotatedText />
          </div>
        </aside>
        <div className={"name-text-container "}>
          <div className="n-t-c-animate">
            <NameText />
          </div>
        </div>
        <div className="image-container">
          <div className="i-c-animate">
            <MyDp />
          </div>
        </div>
        <div className="scrollbtn-container">
          <ScrollDown />
        </div>
      </main>
    </div>
  );
}

export default LandingContainer;
