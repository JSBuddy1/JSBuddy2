import React from 'react';
import { Link } from "react-router-dom";

function Objectsp2(props) {

    const routeChange = () => {
        let path = `/objectsp3`;
        //history.push(path);
      };
    
    return (
        <div>
            <p>Alright so I think we are ready to create our first object. Just remember that values are written as
            <ul>
                <li>Name : Value pairs </li>
                <li>Name and Value separated by a colon.</li>
            </ul></p>
                
            {/* let avengers = {
                smartest: “Ironman”, 
                greenest: “Hulk”,
                oldest: “Captain America”, 
                strangest: “Doctor Strange”
            }; */}
            
                <p>Congrats you built an object, and by doing so you made the Avengers a new squad!</p>

                <button style={{ display: "flex", alignItems: "flex-end" }} onClick={routeChange}>{" "}
            <Link to="/objectsp3">Next Slide</Link>{" "}
                </button>

        </div>
    );
}

export default Objectsp2;