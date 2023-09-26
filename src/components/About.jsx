import React from "react";
import aboutImage from "../assets/about-image.jpg";

const About = () => {
  return (
    <div
      name="about"
      className=" d-flex align-content-center align-items-center vh-100 min-vw-100"
    >
      <div className=" container">
        <div className="row">
          <div className=" col-12 col-lg-5 d-none d-lg-flex">
            <img
              src={aboutImage}
              alt="computer picture"
              className=" w-100 rounded"
            />
          </div>
          <div className=" col-12 col-lg-6 offset-lg-1">
            <div className="">
              <p className=" text-primary">About Me</p>
              <p className=" fs-3 fw-bold">
                A dedicated Web Developer based in Mandalay,Myanmar.
              </p>
              <p className=" text-black-50">
                As a Web Developer, I possess an impressive arsenal of skills in
                HTML, CSS, JavaScript, Bootstrap, Sass, React, Tailwind, MySQL,
                PHP and Laravel. I excel in designing and maintaining responsive
                websites that offer a smooth user experience. My expertise lies
                in crafting dynamic, engaging interfaces through writing clean
                and optimized code and utilizing cutting-edge development tools
                and techniques. I am also a team player who thrives in
                collaborating with cross-functional teams to produce outstanding
                web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
