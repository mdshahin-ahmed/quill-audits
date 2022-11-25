import React from "react";
import "./Security.css";
import securityImg from "../../img/images/security.png";

const Security = () => {
  return (
    <div>
      <div className="securityWrap container-fluid">
        <div className="securityHeader">
          <h5>The Security</h5>
          <h3>How We Secure Your Web3 Project</h3>
        </div>
        <img className="container-fluid" src={securityImg} alt="" />
      </div>
    </div>
  );
};

export default Security;
