import React, {useEffect} from "react";
import Vivus from "vivus";

const MainTitle = () => {
    useEffect(()=> {
        new Vivus('main-title', {duration: 350, file: './title.svg'})
    }, [])
    return(
        <>
        <div id="main-title"></div>
        </>
    )

}

export default MainTitle;
