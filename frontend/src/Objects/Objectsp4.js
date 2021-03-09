import React from 'react';
import { Link } from "react-router-dom";

function Objectsp4(props) {

    const routeChange = () => {
        let path = `/objectsp5`;
        //history.push(path);
      };


    return (
        <div>
            
             


            <button style={{ display: "flex", alignItems: "flex-end" }} onClick={routeChange}>{" "}
            <Link to="/objectsp5">Next Slide</Link>{" "}
                </button>
        </div>
    );
}

export default Objectsp4;