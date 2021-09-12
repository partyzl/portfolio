import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gfg2n4i",
        "portfolio_template",
        e.target,
        "user_ToJwfegMzrYofM5ihWgMX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMessage(true);
    e.target.reset();
  };

  return (
    <>
      <div className="contact-body" id="contact-me">
        <div className="container form-container">
          <div className="col-lg-6 icon-boundary">
            <a target="_blank" href="https://github.com/partyzl">
              <img className="icon icon-1" src="git.svg" alt="GitHub Logo" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/parthpatel4496/">
              <img
                className="icon icon-2"
                src="linkedin.svg"
                alt="Linkedin Logo"
              />
            </a>
          </div>
          <div className="col-lg-6 form-boundary">
            <form onSubmit={handleSubmit}>
            <h2>Contact Me</h2>
              <input
                className="col-md-8"
                type="text"
                name="name"
                required
                placeholder="Your name"
              />
              <input
                className="col-md-10"
                type="email"
                name="email"
                required
                placeholder="Your Email Here"
              />
              <input
                className="col-md-8"
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                className="col-md-10"
                type="text"
                name="msg"
                required
                placeholder="How can I help you?"
                rows="5"
              />
              <button type="submit" className="form-btn">
                Send
              </button>
              <br />
              {message && (
                <span className="form-msg">Thank you, I will reply ASAP!</span>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
