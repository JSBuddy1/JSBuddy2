import {describe, it, expect, run} from "jest-lite";
export const slides = [
    {
        text: 'Objects',
        html: `<h3>Real Life Objects, Properties, and Methods</h3>
 
            
        <p>In real life, a car is an object.
        A car has properties like weight and color, and methods like start and stop:</p>
        <ul>
            <li>All cars have the same properties, but the property values differ from car to car.</li>
            <li>All cars have the same properties, but the property values differ from car to car.</li>
            <li>All cars have the same methods, but the methods are performed at different times.</li>
        </ul>
            <p> You have already learned that JavaScript variables are containers for data values.<br/>
        This code assigns a simple value (Fiat) to a variable named car:</p>
        <h3>let car = "Fiat";</h3>
        <p> Objects are variables too. But objects can contain many values.<br/>
        This code assigns many values (Fiat, 500, white) to a variable named car:</p>
        <h3>Example</h3>
        <p>let car = {type: 
            "Fiat", 
            model:"500", 
            color:"white"};</p>`,
    },
    {
        text: 'AVENGERS ASSEMBLE',
        html: `<p>Alright so I think we are ready to create our first object. Just remember that values are written as
        <ul>
            <li>Name : Value pairs </li>
            <li>Name and Value separated by a colon.</li>
        </ul></p>
            
        let avengers = {
            smartest: “Ironman”, 
            greenest: “Hulk”,
            oldest: “Captain America”, 
            strangest: “Doctor Strange”
        };
        
            <p>Congrats you built an object, and by doing so you made the Avengers a new squad!</p>`,
    },
    {
        text: 'Lets get inside that object!',
        html: `<p>There are two ways to get our Avengers team to assemble from that object. By using Dot Notation or Bracket Notation.</p>
        <h4>  Bracket Notation : </h4>
          avengers[“greenest”] => Hulk
          <h4>Dot Notation:</h4> 
          avengers.greenest => Hulk
          
          <p>Easy Peasy huh?!<br/>
          Although there isn’t really any difference in using bracket or dot notation, dot notation is way more popular to use...and after all do we not want to be apart of the cool kids.</p>`,
    },
    {
        text: 'Pizza Pizza Emoji',
        html: `<p>Lets use our newfound knowledge of objects and create sentences with them!<br/>
        Meet my bestest best friend forever John Smith</p>

        let person = {
            firstname:"John",
            lastname:"Smith",
            age:25,
            favoritefood: “Pizza” 
        };
        
        <p>Sometimes John has a hard time saying what he feels, so let’s help him. He really loves pizza. How do we get him to say that</p>
        
        console.log(person.firstname + “loves + person.favoritefood) 
        => “John loves Pizza”`,
    },
    // {
    //     text: '',
    //     html: ``,
    // },
    // {
    //     text: '',
    //     html: ``,
    // },
    
]