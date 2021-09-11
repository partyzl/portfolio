import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import {default as MainTitle} from './MainTitle';

const Header = () => {
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Web Design",
                "Web Development",
                "Full-Stack",
                "Ultimate Frisbee",
            ], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            smartBackspace: true,
            loop: true,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return(
        <>
        <div className="header-wrapper">
            {" "}
            <div className="main-title">
                <MainTitle/>
            </div>
            <div>
                {/* Element to display typing strings */}
                <span ref={el}></span>
            </div>
            <a href="#" className="btn-main-offer">Contact Me</a>
        </div>
        </>
    )
}

export default Header;