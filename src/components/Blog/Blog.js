import React from "react";
import "./Blog.css";
import blogImage from "../../img/images/blog.png";

const datas = [
  {
    id: 1,
    src: blogImage,
    heading: "Web3 Security: Classification & Analysis of Web3 Hacks",
    date: "15 Mar, 2023",
    description:
      "At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version.",
  },
  {
    id: 2,
    src: blogImage,
    heading: "Web3 Security: Classification & Analysis of Web3 Hacks",
    date: "15 Mar, 2023",
    description:
      "At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version.",
  },
  {
    id: 3,
    src: blogImage,
    heading: "Web3 Security: Classification & Analysis of Web3 Hacks",
    date: "15 Mar, 2023",
    description:
      "At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version.",
  },
];

const Blog = () => {
  return (
    <div className="blogWrap mb-5">
      <div className="container">
        <div className="mb-5 d-block text-start d-sm-flex justify-content-between">
          <div className="servicesHeader">
            <h5>our blog</h5>
            <h3>Catch up on the news</h3>
          </div>
          <div className="align-self-end mt-3 mt-sm-0">
            <button className="buttonBackground">Read More</button>
          </div>
        </div>
        <div className="blogs">
          <div className="row">
            {datas.map((data) => {
              const { id, src, heading, description, date } = data;
              return (
                <div key={id} className="col-md-4 blog mb-4">
                  <img src={src} alt="" />
                  <h5>{heading}</h5>
                  <span>{date}</span>
                  <p className="my-2">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
