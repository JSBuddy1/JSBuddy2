import React from 'react';
import { Link } from "react-router-dom";

function Objectsp1(props) {

    const routeChange = () => {
        let path = `/objectsp2`;
        //history.push(path);
      };

    return (
        <div>
         <h2>Objects</h2>
 
        <h3>Real Life Objects, Properties, and Methods</h3>
 
            
            <p>In real life, a car is an object.
            A car has properties like weight and color, and methods like start and stop:</p>
            <ul>
                <li>All cars have the same properties, but the property values differ from car to car.</li>
                <li>All cars have the same properties, but the property values differ from car to car.</li>
                <li>All cars have the same methods, but the methods are performed at different times.</li>
            </ul>
                <p> You have already learned that JavaScript variables are containers for data values.<br/>
            This code assigns a simple value (Fiat) to a variable named car:</p>
            <h3>let car = "Fiat";</h3>
            <p> Objects are variables too. But objects can contain many values.<br/>
            This code assigns many values (Fiat, 500, white) to a variable named car:</p>
            <h3>Example</h3>
            {/* <p>let car = {type: 
                "Fiat", 
                model:"500", 
                color:"white"};</p> */}


            
            
           
            
           
            
            <button style={{ display: "flex", alignItems: "flex-end" }} onClick={routeChange}>{" "}
            <Link to="/objectsp2">Next Slide</Link>{" "}
                </button>
 
            

        </div>
    );
}

export default Objectsp1;