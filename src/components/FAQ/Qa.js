import React, { useState } from "react";
import "./Qa.css";

const Qa = ({ faq }) => {
  const { question, answer } = faq;
  const [show, setShow] = useState(false);
  //   console.log(show);
  return (
    <div onClick={() => setShow(!show)} className="accordion">
      <div className="accordionHeading">
        <p className="question">{question}</p>
        <p className="accodionIcon">
          {show ? (
            <i className="fa-solid fa-caret-up"></i>
          ) : (
            <i className="fa-solid fa-caret-down"></i>
          )}
        </p>
      </div>
      {show && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Qa;
