import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(true);



  const navLinks = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary fixed-top">
        <div className="container">
          <Link
            className="navbar-brand nav-brand-font text-white fs-2"
            to="home"
            role="button"
          >
            MHA
          </Link>
          <button
            className="navbar-toggler bg-white border border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setNavToggle(!navToggle)}
          >
            <span className="">{navToggle ? <BiMenu /> : <RxCross2 />}</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navLinks.map(({ id, link }) => (
                <li className="nav-item d-lg-none" key={id}>
                  <Link
                    onClick={() => setNavToggle(!navToggle)}
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className="nav-link text-white text-capitalize  text-center "
                    to={link}
                    role="button"
                  >
                    {link}
                  </Link>
                </li>
              ))}
              {navLinks.map(({ id, link }) => (
                <li className="nav-item d-none d-lg-flex " key={id}>
                  <Link
                    className="nav-link text-white text-capitalize  text-center"
                    to={link}
                    role="button"
                    activeClass="active"
                    spy={true}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
