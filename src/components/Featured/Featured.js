import React from "react";

import cointellligence from "../../img/images/cointelligence.JPG";
import productHunt from "../../img/images/product_hunt.JPG";
import moneyControl from "../../img/images/money_control.png";
import crunch from "../../img/images/crunch.png";
import hackerNoon from "../../img/images/hacker_noon.png";
import investIn from "../../img/images/invest_in.png";
import "./Featured.css";

const datas = [
  {
    id: 1,
    src: cointellligence,
  },
  {
    id: 2,
    src: productHunt,
  },
  {
    id: 3,
    src: moneyControl,
  },
  {
    id: 4,
    src: crunch,
  },
  {
    id: 5,
    src: hackerNoon,
  },
  {
    id: 6,
    src: investIn,
  },
];

const Featured = () => {
  return (
    <div>
      <div className="featuredWrap">
        <div className="container">
          <div className="servicesHeader text-center mb-4">
            <h5>mentions</h5>
            <h3>As Featured In</h3>
          </div>
          <div className="features">
            <div className="row mx-5">
              {datas.map((data) => {
                const { id, src } = data;
                return (
                  <div key={id} className="col-sm-6 col-md-4 ">
                    <div className="feature">
                      <img src={src} alt="" />
                      <button>Read More</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
