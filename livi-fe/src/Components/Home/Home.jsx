import React from "react";

import "./Home.css";

import homeImage from "../../Assets/provider-patient-graphic_v2.svg";
import aetnaImage from "../../Assets/insurance-aetna.svg";
import bcbsImage from "../../Assets/insurance-bcbs.svg";
import cignaImage from "../../Assets/insurance-cigna.png";
import humanaImage from "../../Assets/insurance-humana.png";
import unitedImage from "../../Assets/insurance-united.svg";

function Home() {
  return (
    <div className="Home">
      <div className="homeViewContainer">
        <div className="leftView">
          <h1 className="homeHeader">
            Hi. I'm Juan! For fun, I like to build things.
          </h1>
          <h2 className="homeSubtitle">
            I'm a hungry, self starter, product focused engineer that is ready
            to build the future of health care with Livi.
          </h2>
          <button className="homeButton">Lets Build</button>
        </div>

        <div className="rightView">
          <img src={homeImage} alt="" />
        </div>
      </div>

      <div className="insuranceListContainer">
        <h3 className="insuranceListHeader">
          Find dietitians in network with:
        </h3>

        <div className="insuranceList">
          <div className="insurance">
            <img src={aetnaImage} className="insuranceLogo" alt="aetna logo" />
          </div>
          <div className="insurance">
            <img src={bcbsImage} className="insuranceLogo" alt="aetna logo" />
          </div>
          <div className="insurance">
            <img src={cignaImage} className="insuranceLogo" alt="aetna logo" />
          </div>
          <div className="insurance">
            <img src={humanaImage} className="insuranceLogo" alt="aetna logo" />
          </div>
          <div className="insurance">
            <img src={unitedImage} className="insuranceLogo" alt="aetna logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
