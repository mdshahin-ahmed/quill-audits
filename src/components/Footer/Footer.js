import React from "react";
import "./Footer.css";
import parentCompany from "../../img/images/parentCompany.svg";
import engflag from "../../img/images/eng.png";
import jflag from "../../img/images/japan.png";
import cflag from "../../img/images/china.png";

const Footer = () => {
  return (
    <div className="footerWrap py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="parentCompany mb-3 text-start">
              <h5>Parent Company</h5>
              <img className="img-fluid my-2" src={parentCompany} alt="" />
              <p>
                Quillhash delivers enterprise grade blockchain technology to
                leading companies worldwide.
              </p>
            </div>
            <select className="selectWrap" name="" id="">
              <option className="engFlag" value="eng">
                <span>ENG</span>
              </option>
              <option value="japan">
                {/* <img src={jflag} alt="" /> */}
                <span>日本語</span>
              </option>
              <option value="china">
                {/* <img src={cflag} alt="" /> */}
                <span>汉语</span>
              </option>
            </select>
          </div>
          <div className="col-md-8">
            <div className="row text-start">
              <div className="col-md-4 footerSection">
                <h5>Explore</h5>
                <p>Careers</p>
                <p>Courses</p>
                <p>Blockchain Security CTF</p>
                <p>QuillAudits Partner Program</p>
                <p>QuillAudits Partner Program</p>
              </div>
              <div className="col-md-4 footerSection">
                <h5>Services</h5>
                <p>Smart Contract Auditing</p>
                <p>Blockchain Pen Testing</p>
                <p>Due Diligence</p>
              </div>
              <div className="col-md-4 footerSection">
                <h5>Contact Us</h5>
                <p>
                  LG 006, DLF Grand Mall, Mehrauli Gurgaon Road, Near
                  Sikanderpur DLF Phase1, Sector 28, Gurugram, Haryana - 122002
                </p>
                <div className="footerEmail d-flex">
                  <i className="fa-regular fa-envelope"></i>
                  <span>contact@quillaudits.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
