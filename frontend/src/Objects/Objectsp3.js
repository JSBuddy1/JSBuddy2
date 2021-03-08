import React from 'react';
import { Link } from "react-router-dom";

function Objectsp3(props) {


    const routeChange = () => {
        let path = `/objectsp4`;
        //history.push(path);
      };
    

    return (
        <div>
            
            <h3>Lets get inside that object!</h3>
            <p>There are two ways to get our Avengers team to assemble from that object. By using Dot Notation or Bracket Notation.</p>
          <h4>  Bracket Notation : </h4>
            avengers[“greenest”] => Hulk
            <h4>Dot Notation:</h4> 
            avengers.greenest => Hulk
            
            <p>Easy Peasy huh?!<br/>
            Although there isn’t really any difference in using bracket or dot notation, dot notation is way more popular to use...and after all do we not want to be apart of the cool kids.</p>


            <button style={{ display: "flex", alignItems: "flex-end" }} onClick={routeChange}>{" "}
            <Link to="/objectsp4">Next Slide</Link>{" "}
                </button>
        </div>
    );
}

export default Objectsp3;