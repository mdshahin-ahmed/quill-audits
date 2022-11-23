import React from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="headerBannerWrap">
        <Header></Header>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
