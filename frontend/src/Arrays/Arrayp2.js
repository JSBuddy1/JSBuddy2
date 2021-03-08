import React from "react";
import { Link } from "react-router-dom";

function Arrayp2(props) {
  
  const routeChange = () => {
    let path = `/arraysp3`;
    //history.push(path);
  };

  return (
    <div>
      <p>In JavaScript, an array is declared using square brackets ---> [ ].</p>
      <ul>
        <li>
          whatever is in the array, we will refer to it as the element of that
          array;
        </li>
        <li>elements in the array are separated with commas;</li>
        <li>elements are numbered, starting with zero;</li>
        <li>
          we can access each element, using the particular position of that
          element. Like strings, the index starts at 0.
        </li>
      </ul>

      <h3>Example:</h3>
      <p>let animalsArray = [];</p>
      <p>const animalsArray = ['dog', 'cat', 'rabbit'];</p>
      <p>Here is your first array! And it’s a furry one!</p>

      <button
        style={{ display: "flex", alignItems: "flex-end" }}
        onClick={routeChange}
      >
        {" "}
        <Link to="/arraysp3">Next Slide</Link>{" "}
      </button>
    </div>
  );
}

export default Arrayp2;
