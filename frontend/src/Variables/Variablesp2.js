import React from "react";
import { Link } from "react-router-dom";

function Variablesp2(props) {

  const routeChange = () => {
    let path = `/variablesp3`;
  }
  return (
    <div>
      <h1>JavaScript Variables : Part 1</h1>

      <p>JavaScript variables are containers for storing data values.</p>

      <p>
        In this example, x, y, and z, are variables, declared with the var
        keyword:
      </p>

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
      <div>
        <button
          style={{ display: "flex", alignItems: "flex-end" }}
          onClick={routeChange}>{" "}
          <Link to="/variablesp3">Next Slide</Link>{" "}
        </button>
      </div>
    </div>
  );
}

export default Variablesp2;