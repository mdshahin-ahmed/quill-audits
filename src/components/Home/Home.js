import React from "react";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import FAQ from "../FAQ/FAQ";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import HashingBits from "../HashingBits/HashingBits";
import Header from "../Header/Header";
import JoinHands from "../JoinHands/JoinHands";
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
      <FAQ></FAQ>
      <Blog></Blog>
      <HashingBits></HashingBits>
      <JoinHands></JoinHands>
      <Footer></Footer>
    </div>
  );
};

export default Home;
