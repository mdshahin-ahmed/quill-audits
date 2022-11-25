import React from "react";
import "./SmartContractAudit.css";

const SmartContractAudit = () => {
  return (
    <div>
      <div className="smartContractAuditWrap my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-align-start align-self-center ">
              <div className="servicesHeader">
                <h5>why are we here</h5>
                <h3>What is the Need of Smart Contract Audit?</h3>
              </div>
              <button className="buttonBackground d-flex my-5">
                Talk to an Expert
              </button>
            </div>
            <div className="col-md-6 smartContractAuditTextWrap">
              <p className="first_p">
                Smart Contract Audits Build Social Authority
              </p>
              <p className="second_p">
                Only 52.7% of the Exploited Web3 Projects were Audited.
              </p>
              <p className="thired_p">
                47.3% of the Web3 Hacks in First Half of 2022 were due to Smart
                Contract Vulnerabilities.
              </p>
              <p className="fourth_p">
                Helps in Earning Users/Investors Trust for the Product
              </p>
              <p className="fifth_p">
                Helps in Earning Users/Investors Trust for the Product
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartContractAudit;
