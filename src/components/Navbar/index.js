import React from "react";
//React fontawesome imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
   //     <div className="container">
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">

      <div className="container">
        <a role="logo" className="navbar-brand" href="#">
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
           <svg className="page-logo"  width="29" height="40" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.176 39.176C3.376 39.176 2.624 38.952 1.92 38.504C1.216 38.056 0.864 37.48 0.864 36.776C0.864 36.424 0.944 35.992 1.104 35.48C1.264 35 1.408 34.552 1.536 34.136C2.56 31 3.52 28.072 4.416 25.352C5.312 22.632 6.208 19.992 7.104 17.432C8 14.872 8.944 12.312 9.936 9.752C10.96 7.192 12.096 4.52 13.344 1.736C12.128 1.96 11.04 2.296 10.08 2.744C9.152 3.16 8.4 3.544 7.824 3.896C7.248 4.216 6.864 4.376 6.672 4.376C6.48 4.376 6.176 4.216 5.76 3.896C5.376 3.576 5.184 3.304 5.184 3.08C6.016 2.728 6.992 2.344 8.112 1.928C9.264 1.512 10.496 1.16 11.808 0.871999C13.12 0.583999 14.448 0.439999 15.792 0.439999C17.2 0.439999 18.624 0.631999 20.064 1.016C21.536 1.4 22.88 1.992 24.096 2.792C25.312 3.56 26.288 4.52 27.024 5.672C27.76 6.824 28.128 8.168 28.128 9.704C28.128 11.368 27.76 12.808 27.024 14.024C26.288 15.208 25.312 16.216 24.096 17.048C22.88 17.848 21.568 18.504 20.16 19.016C18.752 19.496 17.344 19.88 15.936 20.168C14.56 20.424 13.328 20.6 12.24 20.696C11.152 20.76 10.352 20.792 9.84 20.792H9.36C8.4 24.088 7.472 27.336 6.576 30.536C5.712 33.736 4.912 36.616 4.176 39.176ZM9.552 20.024C11.312 19.928 13.088 19.64 14.88 19.16C16.704 18.68 18.368 17.992 19.872 17.096C21.376 16.168 22.592 15.032 23.52 13.688C24.448 12.312 24.912 10.712 24.912 8.888C24.912 7.16 24.496 5.752 23.664 4.664C22.864 3.576 21.792 2.776 20.448 2.264C19.136 1.72 17.728 1.448 16.224 1.448C15.04 3.784 13.888 6.584 12.768 9.848C11.648 13.112 10.576 16.504 9.552 20.024Z" fill="white"/>
            </svg>
            
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
          <ul role="navList" className="navbar-nav mx-5">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#intro">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-me">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-me">
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
