import React from "react";
//React fontawesome imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
   //     <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light ">

      <div className="container">
        <a className="navbar-brand" href="#">
          {
            //   <svg
            //   xmlns="http://www.w3.org/2000/svg"
            //   width="30"
            //   height="30"
            //   fill="#fff"
            //   className="bi bi-laptop"
            //   viewBox="0 0 16 16"
            //   >
            //   <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
            // </svg>
            <img className="page-logo" src="https://svgsilh.com/svg/1191372.svg" alt="" />
          }
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <FontAwesomeIcon icon={faBars} style= {{color: "grey"}}/>
        </button>
        <div className="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
          <div className=" d-flex justify-content-end">
          <ul className="navbar-nav mx-5">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Me
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
    //        </div>
  );
};

export default Navbar;
