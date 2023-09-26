import React from "react";
import { BsDownload } from "react-icons/bs";
import { TfiBag } from "react-icons/tfi";
import myHeroImage from "../assets/profile-pic.png";
import { Link } from "react-scroll";
import Typed from "typed.js";
import myResume from "../assets/resume/MinHtetAung_Resume.pdf";

const Home = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        " Web Developer",
        "Front-End Developer",
        "Software Engineer",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div
      name="home"
      className=" d-flex align-content-center align-items-center min-vh-100 min-vw-100   bd-masthead "
    >
      <div className="container">
        <div className=" row align-items-center">
          <div className=" col-12 col-lg-6">
            <div className=" d-flex flex-column ">
              <p className=" fs-1 fw-bold text-center text-lg-start">
                I'm a <span ref={el} />
              </p>
              <p className=" text-center text-lg-start text-black-50">
                Hi, I'm Min Htet Aung. A passionate web developer based in
                Mandalay,Myanmar.
              </p>
              <div className=" d-flex justify-content-around justify-content-lg-start">
                <Link
                  to="portfolio"
                  className=" btn btn-primary me-lg-2 d-flex align-items-center"
                >
                  <TfiBag className=" me-2" /> View Portfolio
                </Link>

                <a href={myResume} download={true} className=" btn btn-success  d-flex justify-content-center align-items-center">
                  <BsDownload className=" me-2" /> Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className=" col-12 col-lg-6">
            <div className=" d-flex justify-content-center mt-5 mt-lg-0 p-lg-0">
              <img
                src={myHeroImage}
                alt="my profile photo"
                className=" w-75 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
