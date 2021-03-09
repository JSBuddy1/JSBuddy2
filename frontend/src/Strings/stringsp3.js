import React from 'react';
import { Link } from "react-router-dom";

function Stringsp3(props) {

    const routeChange = () => {
        let path = `/arraysp2`;
        //history.push(path);
      };

    return (
        <div>
            <h1>Single quotes vs. double quotes</h1>
            <p>In JavaScript, you can choose single quotes or double quotes to wrap your strings in.
                Both of the following will work okay:</p>
            <code>
                let sgl = 'Single quotes.';
                let dbl = "Double quotes";
                sgl;
                dbl;
                </code>

            <p>There is very little difference between the two,
            and which you use is down to personal preference.
            You should choose one and stick to it, however;
            differently quoted code can be confusing,
            especially if you use two different quotes on the same string!
                    The following will return an error:</p>

            <code>
                <p>let badQuotes = 'What on earth?";</p>
            </code>

            <p>The browser will think the string has not been closed
            because the other type of quote you are not using to
            contain your strings can appear in the string.
                          For example, both of these are okay:</p>
            <code>
                let myDog = 'Hunter is smarter than yours "🤣🤣"?';
                let chihuahua = "Always bark but can't bite.";
                myDog;
                chihuahua;
                           </code>

            <p>However, you can't include the same quote mark inside the string
            if it's being used to contain them. The following will error,
                               as it confuses the browser as to where the string ends</p>

            <code>
                <p>let bigmouth = 'I've got no right to take my place...';</p>
            </code>

            <p>This leads us very nicely into our next subject.</p>


            <h2>Escaping characters in a string</h2>
            <p>To fix our previous problem code line, we need to escape the problem quote mark.
            Escaping characters means that we do something to them to make sure
            they are recognized as text, not part of the code. In JavaScript,
                                    we do this by putting a backslash just before the character. Try this:</p>

            <code>
                <p>let bigmouth = 'I\'ve got no right to take my place...';
                                            bigmouth;</p>
            </code>

            <p></p>


            <button
                    style={{ display: "flex", alignItems: "flex-end" }}
                    onClick={routeChange}>{" "}
                    <Link to="/stringsp4">Next Slide</Link>{" "}
                </button>


        </div>
    );
}

export default Stringsp3;