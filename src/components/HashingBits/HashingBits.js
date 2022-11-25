import React from "react";
import "./HashingBits.css";
import hashingBitsicon from "../../img/images/HashingBitsIcon.svg";
import envalope from "../../img/images/envalope.svg";

const HashingBits = () => {
  return (
    <div className="hashingBitsWrap">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="hashingBitsTextWrap">
              <img className="img-fluid" src={hashingBitsicon} alt="" />
              <h6>
                DeFi & NFT Hacks, CTFs, and Blockchain Security Insights
                Straight to your Inbox.
              </h6>
              <p>
                Explore our weekly newsletter: HashingBits. Stay updated on
                everything we’re publishing. Stand a step ahead.
              </p>
              <input placeholder="youremail@gmail.com" type="text" />
              <div className="successEmail">
                <i className="fa-solid fa-check"></i>{" "}
                <span>
                  Your email has been successfully registered, headlines will be
                  sent to you soon.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-5 pb-5 pb-md-0">
            <div className="hashingBitsImageBg">
              <div className="d-flex justify-content-center align-items-center hashingBitsImage">
                <img src={envalope} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HashingBits;
