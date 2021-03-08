import React from 'react';
import { Link } from "react-router-dom";

function Arrayp1(props) {

    const routeChange = () => {
        let path = `/arraysp2`;
        //history.push(path);
      };

    return (
        <div>
            <h3>What is an Array?</h3>
            <p>An array is a special variable, which can hold more than one value at a time.</p>
            <p>If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:</p>
            <p>var car1 = "Saab";<br/>
               var car2 = "Volvo";<br/>
            var car3 = "BMW";</p>

            <p>However, what if you want to go through the cars and find a specific one? And what if you had not 3 cars, but 300?</p>
            <p>The solution is an array!</p>
            <p>An array can hold many values under a single name, and you can access the values by referring to it by what number in line it is</p>






            <button
          style={{ display: "flex", alignItems: "flex-end" }}
          onClick={routeChange}>{" "}<Link to="/arraysp2">Next Slide</Link>{" "}
        </button>
        </div>
    );
}

export default Arrayp1;