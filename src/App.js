import React from "react";
import "./App.css";
import { Navbar, Header, About, Portfolio, Experience, Contact } from "./components";
import Particles from "react-particles-js";

const App = () => {
  return (
    <>
      <div>
        <Particles
          params={{
            particles:{
              number: {
                value: 30,
                density:{
                  enable:true,
                  value_area: 900
                }
              },
              shape:{
                type: "circle",
                stroke: {
                  width:6,
                  color: "#f9ab00"
                }
                //   particles: {
                  //     number: {
                    //       value: 8,
                    //       density: {
                      //         enable: true,
                      //         value_area: 800,
                      //       },
                      //     },
                      //     line_linked: {
                        //       enable: false,
                        //     },
                        //     move: {
                          //       speed: 1,
                          //       out_mode: "out",
                          //     },
                          //     shape: {
                            //       type: ["image", "circle"],
                            //       image: [
                              //         {
                                //           src: "/images/js.svg",
                                //           height: 20,
                                //           width: 23,
                                //         },
                                //         {
                                  //           src: "./images/react.svg",
          //           height: 20,
          //           width: 20,
          //         },
          //         {
            //           src: "./images/js.svg",
            //           height: 20,
            //           width: 20,
            //         },
            //       ],
            //     },
            //     color: {
              //       value: "#CCC",
              //     },
              //     size: {
                //       value: 30,
                //       random: false,
                //       anim: {
                  //         enable: true,
                  //         speed: 4,
                  //         size_min: 10,
                  //         sync: false,
                  //       },
                  //     },
                  //   },
                  //   retina_detect: false,
                }}
              }}
              />
        <Navbar />
        <Header />
        <About />
        <Portfolio />
        <Experience />
        <Contact/>
      </div>
    </>
  );
};

export default App;
