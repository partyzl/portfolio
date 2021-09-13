import React from "react";
import Carousel from "./carousel";

const About = () => {
  return (
    <>
      <div className="about-body" id="about-me">
          <div className="container active">
              <h1>Lorem Ipsum</h1>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                tempore explicabo accusamus nisi adipisci aliquid cumque nihil,
                dolorem nesciunt corrupti nulla mollitia exercitationem. Ducimus culpa
                facere facilis aliquam, cumque quae placeat? Sunt, nisi dolorum
                molestiae similique corrupti inventore magnam unde?
                </p>
              <Carousel/>
          </div>
      </div>
    </>
  );
};

export default About;
