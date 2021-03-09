import React from 'react';
import { Link } from "react-router-dom";

function stringsp3(props) {
    const routeChange = () => {
        let path = `/objectsp4`;
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

            <p>This works fine. You can escape other characters in the same way, e.g. \",
                 and there are some special codes besides</p>

            <h2>Concatenating strings</h2>
            <p>Concatenate is a fancy programming word that means "join together".
            Joining together strings in JavaScript uses the plus (+) operator,
            the same one we use to add numbers together,
            but in this context it does something different.
                        Let's try an example in our console.</p>
            <code>
                <p>let one = 'Hello, ';</p>
                <p>let two = 'how are you?';</p>
                <p>let joined = one + two;</p>
                <p>joined;</p>
            </code>

            <div>
                <p>The result of this is a variable called joined,
                which contains the value "Hello, how are you?".
                In the last instance, we joined only two strings,
                but you can join as many as you like,
                as long as you include a + between each pair.
                              Try this:</p>
            </div>

            <code>
                <p>let multiple = one + one + one + one + two;
                                   multiple;</p>
            </code>

            <p> You can also use a mix of varibales and actual strings. Try this:</p>




            <button
                style={{ display: "flex", alignItems: "flex-end" }}
                onClick={routeChange}>{" "}
                <Link to="/stringsp4">Next Slide</Link>{" "}
            </button>



        </div>
    );
}

export default stringsp3;