import React from "react";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import contactAppImage from "../assets/portfolio/contact-app.png";
import carShowroomImage from "../assets/portfolio/electric-car-showroom.png";
import foodImage from "../assets/portfolio/food-project.png";
import movieImage from "../assets/portfolio/movie-project.png";
import shopImage from "../assets/portfolio/shop-project.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Car Showroom Project",
      desc: "This project is using HTML, CSS, JavaScript ",
      img: carShowroomImage,
    },
    {
      id: 2,
      title: "Food Project",
      desc: "This project is using HTML, CSS, JavaScript ",
      img: foodImage,
    },
    {
      id: 3,
      title: "Movie Project",
      desc: "This project is using HTML, CSS, JavaScript",
      img: movieImage,
    },
    {
      id: 4,
      title: "Shopping Project",
      desc: "This project is using HTML, CSS, JavaScript",
      img: shopImage,
    },
    {
      id: 5,
      title: "Contact App Project",
      desc: "This project is using HTML, CSS, JavaScript",
      img: contactAppImage,
    },
  ];

  return (
    <div
      name="portfolio"
      className=" d-flex min-vh-100 pt-6 pt-xxl-0 justify-content-center align-content-center align-items-center  min-vw-100"
    >
      <div className=" container">
        <div className="row mb-5">
          <div className=" col-12">
            <div className="">
              <p className=" text-primary">Portfolio</p>
              <p className=" fs-3 fw-bold">
                Check out some of my work right here.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {portfolios.map(({ id, title, desc, img }) => (
            <div key={id} className=" col-12 col-md-6 col-lg-4 mb-5">
              <div className="">
                <div
                  className="card mx-auto mx-lg-0 shadow"
                  style={{ width: "18rem" }}
                >
                  <img src={img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <div className=" d-flex justify-content-evenly">
                      <a
                        href="#"
                        className="btn btn-primary d-flex align-items-center justify-content-center"
                      >
                        Live Demo <BiLinkExternal className=" ms-1" />
                      </a>
                      <a
                        href="#"
                        className="btn btn-success d-flex align-items-center justify-content-center"
                      >
                        Code <BiLogoGithub className=" ms-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
