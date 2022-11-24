import React from "react";
import "./Services.css";
import Lottie from "lottie-react";
import firstService from "../../img/animations/firstService.json";
import pathefund from "../../img/images/serviceHeadin.JPG";
import service1_1 from "../../img/images/service1-1.JPG";
import service1_2 from "../../img/images/service1-2.JPG";
import service1_3 from "../../img/images/service1-3.JPG";
import service1_4 from "../../img/images/service1-4.JPG";
import secondService from "../../img/animations/secondService.json";
import thiredService from "../../img/animations/thirdService.json";
import service3_1 from "../../img/images/service2-1.JPG";

const Services = () => {
  return (
    <div className="servicesWrap container">
      <div className=" servicesHeader">
        <h5>clients partner</h5>
        <h3>Partners</h3>
      </div>
      <div className="pathfundWrap">
        <div className="row">
          <div className="col-10 col-sm-4 mb-3 col-md-2">
            <div className="d-flex pathfoundTextWrap">
              <img src={pathefund} alt="" />
              <h5>Pathfund</h5>
            </div>
          </div>
          <div className="col-10 col-sm-4 mb-3 col-md-2">
            <div className="d-flex pathfoundTextWrap">
              <img src={pathefund} alt="" />
              <h5>Pathfund</h5>
            </div>
          </div>
          <div className="col-10 col-sm-4 mb-3 col-md-2">
            <div className="d-flex pathfoundTextWrap">
              <img src={pathefund} alt="" />
              <h5>Pathfund</h5>
            </div>
          </div>
          <div className="col-10 col-sm-4 mb-3 col-md-2">
            <div className="d-flex pathfoundTextWrap">
              <img src={pathefund} alt="" />
              <h5>Pathfund</h5>
            </div>
          </div>
          <div className="col-10 col-sm-4 mb-3 col-md-2">
            <div className="d-flex pathfoundTextWrap">
              <img src={pathefund} alt="" />
              <h5>Pathfund</h5>
            </div>
          </div>
          <div className="col-10 col-sm-4 mb-3 col-md-2">
            <div className="d-flex pathfoundTextWrap">
              <img src={pathefund} alt="" />
              <h5>Pathfund</h5>
            </div>
          </div>
        </div>
      </div>
      {/* first service start  */}
      <div className="row mx-5 singleServiceWrap">
        <div className="col-md-6 pe-md-5 mb-4 mb-md-0">
          <Lottie animationData={firstService}></Lottie>
        </div>
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="servicesHeader">
            <h5>service</h5>
            <h3>Smart Contract Auditing</h3>
          </div>
          <p>
            Our Audit Process for smart contract is based on the comprehensive
            approach we follow to investigate the code for security flaws and
            potential vulnerabilities.
          </p>
          <div className="imageText">
            <img src={service1_1} alt="" />
            <span>Ethereum</span>
          </div>
          <div className="imageText">
            <img src={service1_2} alt="" />
            <span>Polygon</span>
          </div>
          <div className="imageText">
            <img src={service1_3} alt="" />
            <span>BSC</span>
          </div>
          <div className="imageText">
            <img src={service1_4} alt="" />
            <span>Solana</span>
          </div>
          <div className="imageText">
            <img src={service1_1} alt="" />
            <span>EOS</span>
          </div>
          <button className="buttonBackground my-4">Explore </button>
        </div>
      </div>
      {/* second service start */}
      <div className="row mx-5 singleServiceWrap">
        <div className="col-md-7 mb-4 mb-md-0 align-self-center">
          <div className="servicesHeader">
            <h5>service</h5>
            <h3>Blockchain Peretration Testing</h3>
          </div>
          <p>
            QuillAudits proven strategy to tackle vulnerabilities specific to
            blockchain technology comes with a mix-blend of conventional
            pentesting approach and
          </p>

          <button className="buttonBackground my-4">Learn More</button>
        </div>
        <div className="col-md-5 ps-md-5 mb-4 mb-md-0">
          <Lottie animationData={secondService}></Lottie>
        </div>
      </div>
      {/* third service start */}
      <div className="row mx-5 singleServiceWrap">
        <div className="col-md-6 px-md-5 mb-4 mb-md-0">
          <Lottie animationData={thiredService}></Lottie>
        </div>
        <div className="col-md-6 mb-4 mb-md-0 align-self-center">
          <div className="servicesHeader">
            <h5>service</h5>
            <h3>Due Diligence</h3>
          </div>
          <p>
            QuillAudits acknowledges the significant threats involved in smart
            contracts, which can lead to many critical possibilities.
          </p>
          <div className="imageText">
            <img src={service3_1} alt="" />
            <span>DeFi Due Diligence</span>
          </div>
          <div className="imageText">
            <img src={service3_1} alt="" />
            <span>NFT Due Diligence</span>
          </div>
          <div className="imageText">
            <img src={service3_1} alt="" />
            <span>Run Pull Due Diligence</span>
          </div>

          <button className="buttonBackground my-4">Explore </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
