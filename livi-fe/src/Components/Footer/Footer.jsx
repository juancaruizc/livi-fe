import React from "react";

import "./Footer.css";

import githubImage from "../../Assets/github.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="footerContainer">
        <div className="projectLinks">
          <a
            href="https://github.com/juancaruizc/livi-fe"
            target="_blank"
            rel="noreferrer"
            className="footerProject"
          >
            Project Code (Frontend)
          </a>
          <a
            href="https://github.com/juancaruizc/livi-be"
            target="_blank"
            rel="noreferrer"
            className="footerProject"
          >
            Project Code (Backend)
          </a>
        </div>
        <a
          className="github"
          href="https://github.com/juancaruizc"
          target="_blank"
          rel="noreferrer"
        >
          <img className="githubLogo" src={githubImage} alt="" />
        </a>
        <div className="byMe">Made with ❤️ for Livi by Juan</div>
      </div>
    </div>
  );
}

export default Footer;
