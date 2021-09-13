import React, {useEffect} from "react";
import Vivus from "vivus";

const MainTitle = () => {
    useEffect(()=> {
        new Vivus('main-title', {duration: 200, file: 'title.svg'})
    }, [])
    return(
        <>
        <div id="main-title">{Vivus ? Vivus :
            <h1>Parth Patel</h1>}
        </div>
        </>
    )

}

export default MainTitle;
