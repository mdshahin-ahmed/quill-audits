import React from "react";
import Qa from "./Qa";

const faqs = [
  {
    id: 1,
    question: "What is smart contract security?",
    answer:
      "Smart Contract Security is a set of best practices to identify bugs & vulnerabilities in the code that can lead to security breaches. These loopholes have lead to huge financial losses recently.",
  },
  {
    id: 2,
    question: "Are smart contracts vulnerable?",
    answer:
      "Smart Contract Security is a set of best practices to identify bugs & vulnerabilities in the code that can lead to security breaches. These loopholes have lead to huge financial losses recently.",
  },
  {
    id: 3,
    question: "What is a smart contract audit?",
    answer:
      "Smart Contract Security is a set of best practices to identify bugs & vulnerabilities in the code that can lead to security breaches. These loopholes have lead to huge financial losses recently.",
  },
  {
    id: 4,
    question: "What is a smart contract fail?",
    answer:
      "Smart Contract Security is a set of best practices to identify bugs & vulnerabilities in the code that can lead to security breaches. These loopholes have lead to huge financial losses recently.",
  },
];

const FAQ = () => {
  return (
    <div className="faqWrap container m-5">
      <div className="row">
        <div className="col-md-6 faqTextWrap text-start ">
          <div className="servicesHeader">
            <h5>faq</h5>
            <h3>Frequently Asked Questions</h3>
          </div>
          <p className="my-4">
            Visit our help center to clear out any second thoughts that you may
            have regarding our services.
          </p>
          <button className="buttonBackground">Contact Us</button>
        </div>
        <div className="col-md-6 qaWrap mt-5 mt-md-0">
          {faqs.map((faq) => (
            <Qa key={faq.id} faq={faq}></Qa>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
