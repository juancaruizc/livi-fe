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

  useEffect(() => {
    axios
      .get("https://api-livi.herokuapp.com/api/reviews")
      .then((res) => {
        setReviewOneData(res.data[0]);
        setReviewTwoData(res.data[1]);
        setReviewThreeData(res.data[2]);
        setReviewFourData(res.data[3]);
        console.log(res.data);
      })
      .catch((err) => console.log(err.data));
  }, []);

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
                <p>
                  {/* Ideally below, a function would be built to return a new variable modifying the datetime into the desired date
                  a) to make it less redundant and more reusable
                  b) to reduce side effects and not mutate original data
                  */}
                  {reviewOneData.user_review_created_on.slice(
                    0,
                    reviewOneData.user_review_created_on.search("T")
                  )}
                </p>
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
                <p>
                  {" "}
                  {reviewTwoData.user_review_created_on.slice(
                    0,
                    reviewTwoData.user_review_created_on.search("T")
                  )}
                </p>
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
                <p>
                  {reviewThreeData.user_review_created_on.slice(
                    0,
                    reviewThreeData.user_review_created_on.search("T")
                  )}
                </p>
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
                <p>
                  {" "}
                  {reviewFourData.user_review_created_on.slice(
                    0,
                    reviewFourData.user_review_created_on.search("T")
                  )}
                </p>
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
