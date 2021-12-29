import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="Projects">
      <div className="projectsContainer">
        <h1 className="projectsHeader">Ideas for Future Projects</h1>

        <div className="projectList">
          <div className="project">
            <div className="circle">1</div>
            <h3>Sleep</h3>
            <div className="projectDescContainer">
              <p className="projectDescription">
                Sleep plays a huge role in weight loss and overall health. With
                various sleep wearables offering their API. A sleep
                tracking/optimizing part of Livi can be built.
              </p>
            </div>
          </div>

          <div className="project">
            <div className="circle">2</div>
            <h3>Exercise</h3>
            <div className="projectDescContainer">
              <p className="projectDescription">
                Exercise plays a big part in health, and can act as a force
                multiplier to a healthy diet. Exercise tracking and
                accountability.
              </p>
            </div>
          </div>

          <div className="project">
            <div className="circle">3</div>
            <h3>Community</h3>
            <div className="projectDescContainer">
              <p className="projectDescription">
                Getting put in a community can be super beneficial! A custom
                community for patients for accountability/sharing wins can make
                the journey to better health more awesome!
              </p>
            </div>
          </div>
        </div>

        <div className="btnContainer">
          <button className="projectsBtn">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
