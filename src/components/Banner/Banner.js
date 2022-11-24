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
          <div className="col-md-5 mt-4 mt-md-0 bannerAnimationWrap">
            <Lottie animationData={anim}></Lottie>
          </div>
        </div>
        <div className="bannerBottomWrap">
          <div className="row">
            <div className="col-10 col-md-6 mb-3 col-lg-4   d-flex">
              <h2>$12.8B</h2>
              <div>
                <p>Amount Lost To</p>
                <p>Defi Hacks in 2021</p>
              </div>
            </div>
            <div className="col-10 col-md-6 mb-3 col-lg-4   d-flex">
              <h2>600K</h2>
              <div>
                <p>Lines of Codes</p>
                <p>Secured by QuillAudits</p>
              </div>
            </div>
            <div className="col-10 col-md-6 mb-3 col-lg-4   d-flex">
              <h2>$14.6B</h2>
              <div>
                <p>Amount Protected</p>
                <p>By QuillAudits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
