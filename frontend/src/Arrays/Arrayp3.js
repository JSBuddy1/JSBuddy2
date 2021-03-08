import React from 'react';
import { Link } from "react-router-dom";


function Arrayp3(props) {

    const routeChange = () => {
        let path = `/arraysp4`;
        //history.push(path);
      };

    return (
        <div>

        <h2>Adding and Removing Elements</h2>
        <p>It would be useless not to be able to change the structure of the array, either by adding elements or removing them.</p>
        <p>Certain array methods allow us to manipulate with array elements, so let’s talk about:</p>
        <h3>Push & Pop</h3>
        <p>Using .push lets you add a new element to the end of the array! Think of it like pushing someone into the back of a long line.</p>
        <h3>Examples</h3>
        <p>const cookiesArray = [“chocolate chip”, “oreos”, “sugar cookies”]</p>
        <p>console.log(‘cookiesArray’) => chocolate chip, oreos, sugar cookies</p>
        <h4>And now we push!</h4>
        <p>cookiesArray.push “snickerdoodle”</p>
        <p>console.log(‘cookiesArray’) => chocolate chip, oreos, sugar cookies, snickerdoodle</p>







        <button
          style={{ display: "flex", alignItems: "flex-end" }}
          onClick={routeChange}>{" "}<Link to="/arraysp4">Next Slide</Link>{" "}
        </button>

            
        </div>
    );
}

export default Arrayp3;
