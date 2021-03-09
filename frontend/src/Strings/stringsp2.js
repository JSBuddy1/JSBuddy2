import React from 'react';
import { Link } from "react-router-dom";



function Stringsp2(props) {

    const routeChange = () => {
        let path = `/arraysp2`;
        //history.push(path);
      };

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

            <p>let string = "I love Disney"</p>

            <p>If you don't do this, or miss one of the quotes,
                         you'll get an error.</p>
            <p><b>Try entering the following lines:</b></p>
            <ul>
                <ol>let wrongString1 = This is a trial;</ol>
                <ol>let wrongString2 = 'This is a trial;</ol>
                <ol>let wrongString3 = This is a trial';</ol>
            </ul>

            <p>These lines don't work because any text without quotes around it is assumed
            to be a variable name, property name, a reserved word, or similar.
            If the browser can't find it, then an error is raised
            (e.g. "missing; before statement").
            If the browser can see where a string starts,
            but can't find the end of the string,
            as indicated by the 2nd quote,
            it complains with an error (with "unterminated string literal").
            If your program is raising such errors, then go back
            and check all your strings to make sure you have no missing quote marks
                </p>

            <p>The following will work if you previously defined the variable string
                     — try it now:</p>

            <pre class=" brush: js notranslate"></pre>
            <code>
                <span class="token keyword">let</span>
                         "badString"
                         <span class="token operator">=</span>
                         "string"
                         <span class="token punctuation">;</span>
                         "badString"
                         <span class="token punctuation">;</span>
            </code>
            <pre>
                <code>
                    badString
                         </code>
                         "is now set to have the same as value"
                         <code>string</code>
            </pre>

            <div>


                <button
                    style={{ display: "flex", alignItems: "flex-end" }}
                    onClick={routeChange}>{" "}
                    <Link to="/stringsp3">Next Slide</Link>{" "}
                </button>
            </div>
        </div>
    );
}

export default Stringsp2;
