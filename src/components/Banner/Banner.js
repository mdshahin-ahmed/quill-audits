import React from "react";
import Lottie from "lottie-react";
import anim from "../../img/animations/bannerAnimation.json";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bannerWrap">
      <div className="container  ">
        <div className="row">
          <div className="col-md-7 bannerText">
            <h1>
              Emerging Web3 Ventures Trust Our Smart Contract Audits & Diligence
              Services
            </h1>
            <h3>QuillAudits, Making web3 a safer place</h3>
            <div className="bannerButton">
              <button className="requestButton">Request Free Quote</button>
              <button className="exploreButton">Explore Services</button>
            </div>
          </div>
          <div className="col-md-5 bannerAnimationWrap">
            <Lottie animationData={anim}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
