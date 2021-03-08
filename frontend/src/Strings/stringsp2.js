import React from 'react';
import { link } from "react-router-dom";



function stringsp2(props) {
    return (
        <div>
            <h1>How to initialize String in JavaScript?</h1>
            <p>In JavaScript, we can initialize a String in the following two ways:</p>

            <ul>
                <ol>Using String literal</ol>
                <ol>Using “new” Keyword</ol>

            </ul>
            <p>Let’s discuss both of these ways in the sections below:
                </p>

            <h2>Initializing String using “String literal” method:</h2>
            <p>While creating a string object using the “string literal,” the value of the String is assigned directly to the variable.
                     We assign the value using the single quotes or double-quotes. Moreover, its syntax looks like below:</p>

            <p>

                <br />
                       var variableName = ‘literal’; // Using single quotes

                       var variableName = "literal"; // Using double quotes
                     </p>
            <div>

                <p>
                    {" "}
        Example: <br />
        var x = 5;
        <br />
        var y = 6;
        <br />
        var z = x + y;
        <br />
        From the example above, you can expect:
      </p>
                <p>
                    x stores the value 5<br />
        y stores the value 6<br />z stores the value 11
      </p>
                <button
                    style={{ display: "flex", alignItems: "flex-end" }}
                    onClick={routeChange}>{" "}
                    <Link to="/stringsp2">Next Slide</Link>{" "}
                </button>
            </div>
        </div>
    );
}

export default stringsp2;