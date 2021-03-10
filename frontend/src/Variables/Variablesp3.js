import React from 'react';
import { Link } from "react-router-dom";

function Variablesp3(props) {
  // const routeChange = () => {
  //     let path = `/variablesp4`;

  return (


    <div>

      <p>The new version of JavaScript allows the use of the const keyword to define
          a variable that cannot be reassigned, and the let keyword to define a variable with restricted scope.</p>
      <br />
      <h1>Example: Variable Declaration & Initialization</h1>
          var one = 1; // variable stores numeric value

          var two = 'two';  // variable stores string value

          var three;  // declared a variable without assigning a value
      <p>In the above example, we have declared three variables using var keyword:
      one, two and three. We have assigned values to variables one and two
      at the same time when we declared it, whereas variable three is declared
             but does not hold any value yet, so it's value will be 'undefined'.</p>

      <div>
        <h2>Declare Variables in a Single Line</h2>
        <p>Multiple variables can also be declared in a single line separated by comma.</p>
        <p><b>Example: Multiple Variables in a Single Line</b></p>
        <p>var one = 1, two = 'two', three;</p>
      </div>

      <div>
        <h2>Declare a Variable without var Keyword</h2>
        <p>JavaScript allows variable declaration without var keyword.
               You must assign a value when you declare a variable without var keyword.</p>
      </div>

      <p>
        Example: Variable without var Keyword
            </p>
            one = 1;

            two = 'two';
      <h3>Variable naming</h3>
      <p>There are two limitations on variable names in JavaScript:</p>
      <p>The name must contain only letters, digits, or the symbols $ and _.</p>
      <p>The first character must not be a digit.</p>
      <br />
      <h2><p>The first character must not be a digit.</p></h2>
      <p>let userName;</p>
      <p>let test123;</p>

      <p>When the name contains multiple words, camelCase is commonly used.
      That is: words go one after another, each word except first starting with a capital letter:
                myVeryLongName.</p>

      <p>What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names.
                 They are regular symbols, just like letters, without any special meaning.</p>

      <p>These names are valid:</p>

      <p>let $ = 1; // declared a variable with the name "$"
                <br />
        <p>let _ = 2; // and now a variable with the name "_"</p>
        <br />

        <p>alert($ + _); // 3</p>
        <h3>Examples of incorrect variable names:</h3>
        <p>let 1a; // cannot start with a digit</p>
        <p>let my-name; // hyphens '-' aren't allowed in the name</p>


        <h4>Case matters</h4>
        <p>Variables named apple and AppLE are two different variables.</p>

        <h4>Reserved names</h4>
        <p>There is a list of reserved words, </p>
        <p>which cannot be used as variable names because they are used by the language itself.</p>

        <p>For example: let, class, return, and function are reserved.</p>

        <p>The code below gives a syntax error:</p>

        <p>let let = 5; // can't name a variable "let", error!</p>
        <p>let return = 5; // also can't name it "return", error!</p>






        {/* <div>
          <button
            style={{ display: "flex", alignItems: "flex-end" }}
            onClick={routeChange}>{" "}
            <Link to="/variablesp4">Next Slide</Link>{" "}
          </button>
        </div> */}
    </div>


  );
}

export default Variablesp3;