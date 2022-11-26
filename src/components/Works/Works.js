import React from "react";
import "./Works.css";
import wordImage from "../../img/images/work.png";

import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Works = () => {
  return (
    <div>
      <div className="worksWrap">
        <div className="container">
          <div className="worksHeaderWrap">
            <h5>Portfolio</h5>
            <h3>Latest Work</h3>
          </div>
          <div className="headingButtonWrap mb-5">
            <button className="buttonActive">Ethereum</button>
            <button>Binanca</button>
            <button>NFT</button>
            <button>Solana</button>
          </div>
          <div className="sliderWrap">
            <Carousel breakPoints={breakPoints}>
              <Item>
                <div className="work">
                  <img src={wordImage} alt="" />
                  <h3>StackOs Audit Report</h3>
                  <div className="workButtons">
                    <button>view</button>
                    <button>download</button>
                  </div>
                </div>
              </Item>
              <Item>
                <div className="work">
                  <img src={wordImage} alt="" />
                  <h3>StackOs Audit Report</h3>
                  <div className="workButtons">
                    <button>view</button>
                    <button>download</button>
                  </div>
                </div>
              </Item>
              <Item>
                <div className="work">
                  <img src={wordImage} alt="" />
                  <h3>StackOs Audit Report</h3>
                  <div className="workButtons">
                    <button>view</button>
                    <button>download</button>
                  </div>
                </div>
              </Item>
              <Item>
                <div className="work">
                  <img src={wordImage} alt="" />
                  <h3>StackOs Audit Report</h3>
                  <div className="workButtons">
                    <button>view</button>
                    <button>download</button>
                  </div>
                </div>
              </Item>
            </Carousel>
          </div>
          <div className="workButton">
            <button>button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
