import React from 'react';

function Variablesp1(props) {

    const routeChange = () =>{ 
        let path = `/variablesp2`; 
        // history.push(path);
      }
    return (
        <div>
        <h2>Introduction to Variables</h2>
        <p>Let’s start with an example from real life.</p>
        <p>You decided to pack all your stuff into different boxes and place them into some storage. You put labels on each box so you can easier find it later, and obviously, the name is descriptive, so you know what is in that box.</p>

        <p>Analogy:</p>

        <p>
        storage is a memory,<br />
        the box is a variable,<br />
        the label is a variable name.
        </p>
        <img src={'./images/movingboxes.jpg'} alt='movingboxes' />

        <p style={{textAlign:'justify' }} > The main purpose of variables is to store some information. We can think of them as of some kind of boxes that hold some data. These boxes are labeled so we can get them at any point, or just in certain situations when we need them, access to them.
Very common way of saying - access to variable - is reference a variable by its name/label.</p>


        <div>
        <button style={{display:'flex', alignItems:'flex-end' }} onClick={routeChange}>Next Slide</button>
        </div>
        </div>
     
    );
}

export default Variablesp1;