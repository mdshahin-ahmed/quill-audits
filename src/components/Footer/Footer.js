import React, { useState } from "react";
import "./Footer.css";
import parentCompany from "../../img/images/parentCompany.svg";
import jflag from "../../img/images/japan.png";
import cflag from "../../img/images/china.png";

import si1 from "../../img/images/si1.svg";
import si2 from "../../img/images/si2.svg";
import si3 from "../../img/images/si3.svg";
import si4 from "../../img/images/si4.svg";
import si5 from "../../img/images/si5.png";
import si6 from "../../img/images/si6.png";
import si7 from "../../img/images/si7.png";
import si8 from "../../img/images/si8.svg";
import si9 from "../../img/images/si9.svg";

import ReactFlagsSelect from "react-flags-select";

const Footer = () => {
  const [select, setSelect] = useState("GB");
  const onSelect = (code) => setSelect(code);
  return (
    <div className="footerWrap pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="parentCompany mb-3 text-start">
              <h5>Parent Company</h5>
              <img className="img-fluid my-2" src={parentCompany} alt="" />
              <p>
                Quillhash delivers enterprise grade blockchain technology to
                leading companies worldwide.
              </p>
            </div>
            <div className="selectWrap">
              <ReactFlagsSelect
                selected={select}
                onSelect={onSelect}
                countries={["GB", "JP", "CH"]}
                customLabels={{ GB: "ENG", JP: "日本語", CH: "汉语" }}
              />
            </div>
            {/* <select className="selectWrap" name="" id="">
              <option value="eng">ENG</option>
              <option value="japan">日本語</option>
              <option value="china">汉语</option>
            </select> */}
            <div className="languageFlag">
              <img src={jflag} alt="" />
              <img src={cflag} alt="" />
            </div>
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
            <div className="row">
              <div className="col socialIconWrap">
                <h6>Join Our Journey</h6>
                <img src={si1} alt="" />
                <img src={si2} alt="" />
                <img src={si3} alt="" />
                <img src={si4} alt="" />
                <img src={si5} alt="" />
                <img src={si6} alt="" />
                <img src={si7} alt="" />
                <img src={si8} alt="" />
                <img src={si9} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footerBottomText">
          <hr />
          <p>
            All Rights Reserved. &copy; Copyright 2022. QuillHash Technologies
            Private Limited
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
