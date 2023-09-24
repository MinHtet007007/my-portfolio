import React from "react";
import HTMLImage from "../assets/SVG/HTML.svg";
import CSSImage from "../assets/SVG/CSS3.svg";
import JavaScriptImage from "../assets/SVG/JavaScript.svg";
import BootstrapImage from "../assets/SVG/Bootstrap.svg";
import SassImage from "../assets/SVG/Sass.svg";
import ReactImage from "../assets/SVG/React.svg";
import TailwindImage from "../assets/SVG/Tailwind.svg";
import GitHubImage from "../assets/SVG/GitHub.svg";
import GitImage from "../assets/SVG/Git.svg";
import MySqlImage from "../assets/SVG/MySql.svg";
import PHPImage from "../assets/SVG/PHP.svg";
import LaravelImage from "../assets/SVG/Laravel.svg";

const Experience = () => {
  const workTechnologies = [
    {
      id: 1,
      title: "HTML",
      img: HTMLImage,
    },
    {
      id: 2,
      title: "CSS",
      img: CSSImage,
    },
    {
      id: 3,
      title: "JavaScript",
      img: JavaScriptImage,
    },
    {
      id: 4,
      title: "Bootstrap",
      img: BootstrapImage,
    },
    {
      id: 5,
      title: "Sass",
      img: SassImage,
    },
    {
      id: 6,
      title: "React",
      img: ReactImage,
    },
    {
      id: 7,
      title: "Tailwind",
      img: TailwindImage,
    },
    {
      id: 8,
      title: "GitHub",
      img: GitHubImage,
    },
    {
      id: 9,
      title: "Git",
      img: GitImage,
    },
  ];

  const learningTechnologies = [
    {
      id: 1,
      title: "MySql",
      img: MySqlImage,
    },
    {
      id: 2,
      title: "php",
      img: PHPImage,
    },
    {
      id: 3,
      title: "Laravel",
      img: LaravelImage,
    },
  ];

  return (
    <div
      name="experience"
      className=" d-flex align-content-center align-items-center min-vh-100 min-vw-100 pt-6"
    >
      <div className=" container">
        <div className="row mb-5">
          <div className=" col-12">
            <div className="">
              <p className=" text-primary">Experience</p>
              <p className=" fs-3 fw-bold">
                These are the technologies I've worked with
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          {workTechnologies.map(({ id, title, img }) => (
            <div key={id} className=" col-12 col-md-6 col-lg-4 mb-5">
              <div
                className="card  shadow mx-auto mx-lg-0"
                style={{ width: "18rem" }}
              >
                <img
                  src={img}
                  className="card-img-top  w-75 mx-auto"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center fs-3 fw-bold">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mb-5">
          <div className=" col-12">
            <div className="">
              <p className=" text-primary">Coming Soon</p>
              <p className=" fs-3 fw-bold">
                These are the technologies I'm still learning
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {learningTechnologies.map(({ id, title, img }) => (
            <div key={id} className=" col-12 col-md-6 col-lg-4 mb-5">
              <div
                className="card shadow mx-auto mx-lg-0"
                style={{ width: "18rem" }}
              >
                <img
                  src={img}
                  className="card-img-top  w-75 mx-auto"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center fs-3 fw-bold">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
