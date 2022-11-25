import React from "react";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Header from "../Header/Header";
import Security from "../Security/Security";
import Services from "../Services/Services";
import SmartContractAudit from "../SmartContractAudit/SmartContractAudit";
import Testimonials from "../Testimonials/Testimonials";
import Works from "../Works/Works";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="headerBannerWrap">
        <Header></Header>
        <Banner></Banner>
      </div>
      <Services></Services>
      <Security></Security>
      <Works></Works>
      <SmartContractAudit></SmartContractAudit>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
