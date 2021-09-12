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
                <MainTitle/>
            <div>
                {/* Element to display typing strings */}
                <span ref={el}></span>
            </div>
            <a href="#" className="btn-main-offer">Contact Me</a>
            <div className="icon-wrapper">
                <div className="item-1 item"></div>
                <div className="item-2 item"></div>
                <div className="item-3 item"></div>
                <div className="item-4 item"></div>
                <div className="item-5 item"></div>
                <div className="item-6 item"></div>
                <div className="item-7 item"></div>
                <div className="item-8 item"></div>
            </div>
        </div>
        </>
    )
}

export default Header;