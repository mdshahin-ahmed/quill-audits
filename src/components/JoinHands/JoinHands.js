import React from "react";
import "./JoinHands.css";
import joinHand from "../../img/images/joinHand.svg";

const JoinHands = () => {
  return (
    <div className="container my-5">
      <div className="joinHandsWrap mx-0 mx-md-5">
        <div className=" row p-5">
          <div className="col-md-6 pe-3 joinHandTextWrap">
            <h3>Join Hands With us to secure Web3 Together</h3>
            <p>
              Help us in our journey to secure web3 by joining our team of
              talented individuals spread across the globe.
            </p>
            <button>Apply Now!</button>
          </div>
          <div className="col-md-6 joinHandsImage">
            <img src={joinHand} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinHands;
