import React from 'react';
import { Link } from "react-router-dom";

function Arrayp4(props) {

    const routeChange = () => {
        let path = `/arraysp5`;
        //history.push(path);
      };

    return (
        <div>
            <h2>Pop!</h2>
 
            <h3>OH NO!!!!</h3>
                <p>You are about to make your mom all these cookies and forgot she doesn’t like cinnamon! Now we definitely should take snickerdoodles out of the list!</p>

                <p>If you want to remove that unwanted last element from your wonderful cookies array, all you need to do is pop it right out of there!</p>

                <p>Using .pop lets you remove the last element of the array. Simple as that right? </p>

                <h3>Examples</h3>

                <p>const  cookiesArray = [“chocolate chip”, “oreos”, “sugar cookies”, “snickerdoodles”]</p>
                <p>cookiesArray.pop() => chocolate chip, oreos, sugar cookies</p>

                <img src={'./images/cookies.jpeg'} style={{width: ""}} alt="cookies"/>
                    <p>Ohhhweeee thank goodness we took those snickerdoodles out of moms wonderful cookie arrangement. We don’t want her feeling like she is about to do the cinnamon challenge do we?</p>
        






                    <button
          style={{ display: "flex", alignItems: "flex-end" }}
          onClick={routeChange}>{" "}<Link to="/arraysp5">Next Slide</Link>{" "}
        </button>
        </div>
    );
}

export default Arrayp4;