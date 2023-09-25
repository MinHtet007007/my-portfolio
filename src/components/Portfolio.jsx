import React from "react";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import contactAppImage from "../assets/portfolio/contact-app.png";
import carShowroomImage from "../assets/portfolio/electric-car-showroom.png";
import foodImage from "../assets/portfolio/food-project.png";
import movieImage from "../assets/portfolio/movie-project.png";
import shopImage from "../assets/portfolio/shop-project.png";
import myPortfolioImage from "../assets/portfolio/my-portfolio-project.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Contact App Project",
      desc: "This project is using React, RTK Query and TailwindCSS. It covered authentication services and CRUD operations.",
      demoLink: "https://soft-beignet-02699a.netlify.app/",
      codeLink: "https://github.com/MinHtet007007/contact-app-project",
      img: contactAppImage,
    },
    {
      id: 2,
      title: "My Portfolio Project",
      desc: "This project is using React, Bootstrap and Sass. It compatible with all mobile devices and with a pleasant user interface.",
      demoLink: "https://mha-portfolio.netlify.app/",
      codeLink: "https://github.com/MinHtet007007/my-portfolio",
      img: myPortfolioImage,
    },
    {
      id: 3,
      title: "Shopping Project",
      desc: "This project is using React, Redux Toolkit and TailwindCSS. It covered e-commerce feature like add-to-cart and sum total.",
      demoLink: "https://magical-otter-228b3c.netlify.app/",
      codeLink: "https://github.com/MinHtet007007/rtk-shopping-project",
      img: shopImage,
    },
    {
      id: 4,
      title: "Food Project",
      desc: `This project is using React and TailwindCSS. Integrated it with a back-end API from "themealdb.com". `,
      demoLink: "https://zippy-gumption-c5fc74.netlify.app/",
      codeLink: "https://github.com/MinHtet007007/food-project",
      img: foodImage,
    },
    {
      id: 5,
      title: "Car Showroom Project",
      desc: "This project is using HTML, CSS, Bootstrap, Sass and Vanilla JavaScript. It is static website for electric car showroom.",
      demoLink: "https://dynamic-snickerdoodle-b86fc1.netlify.app/",
      codeLink: "https://github.com/MinHtet007007/car-showroom-project",
      img: carShowroomImage,
    },
    {
      id: 6,
      title: "Movie Project",
      desc: `This project is using React and TailwindCSS. Integrated it with a back-end API from "themoviedb.com".`,
      demoLink: "https://jovial-centaur-acd6fe.netlify.app/",
      codeLink: "https://github.com/MinHtet007007/movie-project",
      img: movieImage,
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
          {portfolios.map(({ id, title, desc, demoLink, codeLink, img }) => (
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
                        href={demoLink}
                        target="blank"
                        className="btn btn-primary d-flex align-items-center justify-content-center"
                      >
                        Live Demo <BiLinkExternal className=" ms-1" />
                      </a>
                      <a
                        href={codeLink}
                        target="blank"
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
