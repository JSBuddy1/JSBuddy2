import React from 'react';
import { Link } from "react-router-dom";

function Arrayp5(props) {

    const routeChange = () => {
        let path = `/arraysp6`;
        //history.push(path);
      };

    return (
        <div>
         <p>  It would be useless not to be able to change the structure of the array, either by adding elements or removing them.</p>

        <p>Certain array methods allow us to manipulate with array elements, so let’s talk about:</p>

        <h4>Shift & Unshift</h4>

        <p>If you need to add an element to the front of the array, you are talking about using unshift!</p>
        <p> Remember, it makes you number 1.</p>

            <p>Got mom some milk and flowers so she can really enjoy her day?! You are so thoughtful. But wait..Maybe mom is too old for just milk and cookies, maybe you can throw some coffee in there so she can have more choices? After all she is your favorite person right!</p>
         <h3>Example</h3>   

            <p>const superFunExtraStuffArray = [“milk”, “chocolates”, “roses”]<br/>
            console.log(‘superFunExtraStuffArray’) => milk, chocolates, roses<br/>
            Now lets add that coffee to the front of the list like we talked about<br/>
            const superFunExtraStuffArray = [“milk”, “chocolates”, “roses”]<br/>
            superFunExtraStuffArray.unshift(“coffee”)<br/>
            console.log(‘superFunExtraStuffArray’) => coffee, milk, chocolates, roses</p>

 



            <button
          style={{ display: "flex", alignItems: "flex-end" }}
          onClick={routeChange}>{" "}<Link to="/arraysp6">Next Slide</Link>{" "}
        </button>
        </div>
    );
}

export default Arrayp5;