import React from "react";

import "./Home.css";

import homeImage from "../../Assets/provider-patient-graphic_v2.svg";

function Home() {
  return (
    <div className="Home">
      <div className="leftView">
        <h1 className="homeHeader">Hi. I'm Juan! I love to build things</h1>
        <h2 className="homeSubtitle">
          I'm a hungry, resourceful ready to build the future of healthcare.
        </h2>
        <button className="homeButton">Get Started</button>
      </div>

      <div className="rightView">
        <img src={homeImage} alt="" />
      </div>
    </div>
  );
}

export default Home;
