import React from "react";

import "./Reviews.css";

import yellowStars from "../../Assets/yellowStars.png";
import pinkStars from "../../Assets/pinkStars.png";
import greenStars from "../../Assets/greenStars.png";
import whiteStars from "../../Assets/whiteStars.png";

function Reviews() {
  return (
    <div className="Reviews">
      <div className="reviewsContainer">
        <div className="reviewsHeader">
          <h1>See What Livi Patients Say</h1>
          <h2 className="reviewsSubTitle">
            These reviews are fetched from an API I built 👇
          </h2>
        </div>

        <div className="reviewList">
          {/* Review 1 */}
          <div className="review1">
            <div className="reviewContainer">
              <img className="rating" src={yellowStars} alt="" />
              <p className="reviewDesc">
                Incredibly grateful for Livi getting me the best dietitian. I’ve
                really (and seriously) been making progress.
              </p>

              <div className="reviewFooter">
                <p>02/03/21</p>
                <p>llana</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="review2">
            <div className="reviewContainer">
              <img className="rating" src={pinkStars} alt="" />
              <p className="reviewDesc">
                Can't say enough good things about Livi. It’s simple to make an
                appointment and I have been impressed with the quality of care
                and compassion shown by my dietitian. I really appreciate that
                appointments begin on time and the follow-up care. Highly
                recommend Livi!
              </p>

              <div className="reviewFooter">
                <p>02/03/21</p>
                <p>llana</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="review3">
            <div className="reviewContainer">
              <img className="rating" src={greenStars} alt="" />
              <p className="reviewDesc">
                I’ve engaged in nutritional counseling on-and-off for 10 years
                and never has it been easier or better than with Livi in the
                past few months. Highly recommend 🙏
              </p>

              <div className="reviewFooter">
                <p>02/03/21</p>
                <p>llana</p>
              </div>
            </div>
          </div>

          {/* Review 4 */}
          <div className="review4">
            <div className="reviewContainer">
              <img className="rating" src={whiteStars} alt="" />
              <p className="reviewDesc">
                Adrien provided strategies for me that were practical and really
                work. She listens and was able to get me to think about and
                actually say what I really want and need in my life.
              </p>

              <div className="reviewFooter">
                <p>02/03/21</p>
                <p>llana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
