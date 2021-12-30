import React, { useState } from "react";

import "./Faq.css";

function Faq() {
  const [isQuestionOneOpen, setIsQuestionOneOpen] = useState(false);
  const [isQuestionTwoOpen, setIsQuestionTwoOpen] = useState(false);
  const [isQuestionThreeOpen, setIsQuestionThreeOpen] = useState(false);
  const [isQuestionFourOpen, setIsQuestionFourOpen] = useState(false);

  const handleClickOne = (e) => {
    e.preventDefault();
    setIsQuestionOneOpen(!isQuestionOneOpen);
  };

  const handleClickTwo = (e) => {
    e.preventDefault();
    setIsQuestionTwoOpen(!isQuestionTwoOpen);
  };

  const handleClickThree = (e) => {
    e.preventDefault();
    setIsQuestionThreeOpen(!isQuestionThreeOpen);
  };

  const handleClickFour = (e) => {
    e.preventDefault();
    setIsQuestionFourOpen(!isQuestionFourOpen);
  };

  return (
    <div className="Faq">
      <h1 className="faqHeader">Frequently Asked Questions</h1>

      <div className="faqList">
        <div className="faqOne" onClick={handleClickOne}>
          <h2>What is Livi?</h2>
          {isQuestionOneOpen ? (
            <p className="faqDesc">
              We help people find affordable nutrition care that works with
              their insurance plan, reducing the cost of seeing a dietitian to
              as low as $0 out-of-pocket. Our mission is to expand access to
              nutrition care
            </p>
          ) : (
            ""
          )}
        </div>{" "}
        <div className="faqTwo" onClick={handleClickTwo}>
          <h2>Which insurance companies does Livi work with?</h2>
          {isQuestionTwoOpen ? (
            <p className="faqDesc">
              We currently work with Medicare, Blue Cross Blue Shield, Cigna,
              United Healthcare, Aetna, and Humana. Please reach out if you'd
              like us to add coverage for another network!
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="faqThree" onClick={handleClickThree}>
          <h2>How much does an appointment through Livi cost?</h2>
          {isQuestionThreeOpen ? (
            <p className="faqDesc">
              Depending on your insurance, your visit may be fully covered by
              your insurance company. You may be surprised by how little you
              have to pay — 95% of Livi patients pay nothing at all! Fill out
              our form or contact us today at support@joinlivi.com to see if you
              are eligible and get your in-network cost today.
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="faqFour" onClick={handleClickFour}>
          <h2>Who are the dietitians you work with?</h2>
          {isQuestionFourOpen ? (
            <p className="faqDesc">
              Our dietitians are licensed healthcare professionals (RDNs) with
              decades of experience in nutritional and behavioral therapy. We
              aim to match you with someone who would best suit your goals and
              lifestyle.
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Faq;
