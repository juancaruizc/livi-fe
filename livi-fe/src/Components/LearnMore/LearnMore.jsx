import React from "react";

import "./LearnMore.css";

import arrowImage from "../../Assets/arrow-image.png";

function LearnMore() {
  return (
    <div className="LearnMore">
      <section className="learnMoreContainer">
        <div className="contentContainer">
          <div className="headerContainer">
            <h1 className="learnMoreHeader">
              Are you a registered dietitian or group practice?
            </h1>
            <h2 className="learnMoreSubHeader">
              Offer affordable, in-network care without the administrative
              burden. So you can focus on what matters most.
            </h2>
          </div>
          <button className="learnMoreBtn">
            Learn More
            <img src={arrowImage} className="arrowImage" alt="arrow" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default LearnMore;
