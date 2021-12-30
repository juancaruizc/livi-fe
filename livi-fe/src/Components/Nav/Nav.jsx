import React from "react";

import liviFavicon from "../../Assets/livi-favicon.png";
import arrowImage from "../../Assets/arrow-image.png";

import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <div className="logoContainer">
        <img src={liviFavicon} className="liviFavicon" alt="livi favicon" />
        <h1>livi</h1>
      </div>
      <nav className="navOptions">
        <a href="_">For Providers</a>
        <a href="_">Make a Referral</a>
        <a href="_">About Me</a>
        <a href="_">Contact Us</a>
      </nav>
      <button>
        Lets Build <img src={arrowImage} className="arrowImage" alt="arrow" />
      </button>
    </div>
  );
}

export default Nav;
