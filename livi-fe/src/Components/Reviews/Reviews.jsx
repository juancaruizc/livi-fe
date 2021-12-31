import React, { useState, useEffect } from "react";

import "./Reviews.css";

import axios from "axios";

import yellowStars from "../../Assets/yellowStars.png";
import pinkStars from "../../Assets/pinkStars.png";
import greenStars from "../../Assets/greenStars.png";
import whiteStars from "../../Assets/whiteStars.png";

function Reviews() {
  const [reviewOneData, setReviewOneData] = useState([]);
  const [reviewTwoData, setReviewTwoData] = useState([]);
  const [reviewThreeData, setReviewThreeData] = useState([]);
  const [reviewFourData, setReviewFourData] = useState([]);

  // there is no loading and error state, however ideally, these would be implemented in an api call

  useEffect(() => {
    axios
      .get("https://api-livi.herokuapp.com/api/reviews")
      .then((res) => {
        setReviewOneData(res.data[0]);
        setReviewTwoData(res.data[1]);
        setReviewThreeData(res.data[2]);
        setReviewFourData(res.data[3]);
      })
      .catch((err) => console.log(err.data));
  }, []);

  function dateChange() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  return (
    <div className="Reviews">
      <div className="reviewsContainer">
        <div className="reviewsHeader">
          <h1>See What Livi Patients Say</h1>
          <h2 className="reviewsSubTitle">
            These reviews are fetched from an{" "}
            <a
              href="https://github.com/juancaruizc/livi-be"
              target="_blank"
              rel="noreferrer"
              className="apiLink"
              alt=""
            >
              API
            </a>{" "}
            I built 👇
          </h2>
        </div>

        <div className="reviewList">
          {/* Review 1 */}
          <div className="review1">
            <div className="reviewContainer">
              <img className="rating" src={yellowStars} alt="" />
              <p className="reviewDesc">{reviewOneData.user_review_title}</p>
              <div className="reviewFooter">
                <p>{dateChange(reviewOneData.user_review_created_on)}</p>
                <p>{reviewOneData.user_display_name}</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="review2">
            <div className="reviewContainer">
              <img className="rating" src={pinkStars} alt="" />
              <p className="reviewDesc">{reviewTwoData.user_review_title}</p>

              <div className="reviewFooter">
                <p>{dateChange(reviewTwoData.user_review_created_on)}</p>
                <p>{reviewTwoData.user_display_name}</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="review3">
            <div className="reviewContainer">
              <img className="rating" src={greenStars} alt="" />
              <p className="reviewDesc">{reviewThreeData.user_review_title}</p>

              <div className="reviewFooter">
                <p>{dateChange(reviewThreeData.user_review_created_on)}</p>
                <p>{reviewThreeData.user_display_name}</p>
              </div>
            </div>
          </div>

          {/* Review 4 */}
          <div className="review4">
            <div className="reviewContainer">
              <img className="rating" src={whiteStars} alt="" />
              <p className="reviewDesc">{reviewFourData.user_review_title}</p>

              <div className="reviewFooter">
                <p>{dateChange(reviewFourData.user_review_created_on)}</p>
                <p>{reviewFourData.user_display_name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
