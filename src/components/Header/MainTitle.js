import React, {useEffect} from "react";
import Vivus from "vivus";

const MainTitle = () => {
    useEffect(()=> {
        new Vivus('main-title', {duration: 350, file: 'svg/main-title_animated.svg'})
    }, [])
    return(
        <>
        <div id="main-title"></div>
        </>
    )

}

export default MainTitle;
