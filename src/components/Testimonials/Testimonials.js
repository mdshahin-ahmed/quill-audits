import React from "react";
import "./Testimonials.css";
import testomonialImg from "../../img/images/testomonialsImg.JPG";

const Testimonials = () => {
  const testomonialFunction = () => {
    return (
      <div className="col-md-4 testomonial mb-5">
        <div className="testomonialHeader d-flex justify-content-center">
          <img src={testomonialImg} alt="" />
          <h2>
            Stack<span>OS</span>
          </h2>
        </div>
        <p className="my-3">
          Very professional and timed delivery. Also very prompt in responses
          and queries.
        </p>
        <h5>Vishnu Korde</h5>
        <h6>CEO, StaciOS</h6>
      </div>
    );
  };
  return (
    <div>
      <div className="testimonialsWrap">
        <div className="container">
          <div className="mb-5 d-block text-start d-sm-flex justify-content-between">
            <div className="servicesHeader">
              <h5>testimonials</h5>
              <h3>What our Clients are saying</h3>
            </div>
            <div className="align-self-end mt-3 mt-sm-0">
              <button className="buttonBackground">Read More</button>
            </div>
          </div>

          <div className="testomonials">
            <div className="row">
              {testomonialFunction()}
              {testomonialFunction()}
              {testomonialFunction()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
