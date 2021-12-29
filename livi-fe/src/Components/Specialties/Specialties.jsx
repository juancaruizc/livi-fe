import React from "react";

import JsImage from "../../Assets/js.png";
import ReactImage from "../../Assets/react.png";
import NodeImage from "../../Assets/node.png";
import PostgresImage from "../../Assets/postgres.png";

import "./Specialties.css";

function Specialties() {
  return (
    <div className="Specialties">
      <div className="specialtiesContainer">
        <div className="specialtiesHeader">
          <h1>My Specialties</h1>
          <h2 className="specialtiesSubTitle">
            I first learned these technologies in 2020 and fell in love with
            them! I further developed these skills in school building class
            projects, personal side projects, open source projects and at an
            internship.
          </h2>
        </div>

        <div className="specialtyList">
          <div className="specialty">
            <img className="techLogo" src={JsImage} alt="JavaScript logo" />
            <h3>JavaScript</h3>
            <p className="specialtyDescription">
              JavaScript is super fun! After learning Python and Haskell, JS
              still triumphs. However sometimes, those semicolons get you 😒
            </p>
          </div>
          <div className="specialty">
            <img className="techLogo" src={ReactImage} alt="JavaScript logo" />
            <h3>React</h3>
            <p className="specialtyDescription">
              After learning other JS frameworks such as Angular... React is
              still my favorite! I love you React 😍
            </p>
          </div>
          <div className="specialty">
            <img className="techLogo" src={NodeImage} alt="JavaScript logo" />
            <h3>Node/Express</h3>
            <p className="specialtyDescription">
              After spending a ridiculous amount of time trying to setup my
              local environment with Java at my internship... I went and gave
              Node a hug 🤗
            </p>
          </div>
          <div className="specialty">
            <img
              className="techLogo"
              src={PostgresImage}
              alt="JavaScript logo"
            />
            <h3>Postgres/SQL</h3>
            <p className="specialtyDescription">
              Is it weird to get a warm satisfying feeling when you make a
              successful SQL query? 🤔
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialties;
