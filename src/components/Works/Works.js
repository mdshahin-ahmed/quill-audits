import React from "react";
import "./Works.css";

const Works = () => {
  return (
    <div>
      <div className="worksWrap">
        <div className="container">
          <div className="worksHeaderWrap">
            <h5>Portfolio</h5>
            <h3>Latest Work</h3>
          </div>
          <div className="headingButtonWrap">
            <button className="buttonActive">Ethereum</button>
            <button>Binanca</button>
            <button>NFT</button>
            <button>Solana</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
