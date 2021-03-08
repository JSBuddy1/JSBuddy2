import React from 'react';
import { Link } from "react-router-dom";

function Objectsp4(props) {

    const routeChange = () => {
        let path = `/objectsp5`;
        //history.push(path);
      };


    return (
        <div>
            
            <p>Lets use our newfound knowledge of objects and create sentences with them!<br/>
            Meet my bestest best friend forever John Smith</p>

            {/* let person = {
                firstname:"John",
                lastname:"Smith",
                age:25,
                favoritefood: “Pizza” 
            }; */}
            
            <p>Sometimes John has a hard time saying what he feels, so let’s help him. He really loves pizza. How do we get him to say that</p>
            
            console.log(person.firstname + “loves + person.favoritefood) 
            => “John loves Pizza” 


            <button style={{ display: "flex", alignItems: "flex-end" }} onClick={routeChange}>{" "}
            <Link to="/objectsp5">Next Slide</Link>{" "}
                </button>
        </div>
    );
}

export default Objectsp4;