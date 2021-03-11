import {describe, it, expect, run} from "jest-lite";
export const slides = [
    {
        text: 'Objects',
        html: `<h3>Real Life Objects, Properties, and Methods</h3>
 
            
        <p>In real life, a car is an object. The car has properties like weight and color</p>
      
            All cars have the same properties, but the property values differ from car to car.</br>
           
            <p> You have already learned that JavaScript variables are containers for data values.<br/>
        This code assigns a simple value (Ferrari) to a variable named car:</p>
        <p>let car = "Ferrari";</p>
        <p> Objects are variables too. But objects can contain many values.<br/>
        This code assigns many values (Ferrari, 250 GTO, red) to a variable named car:</p>
        <h3>Example</h3>
        <p>let car = {<br/>
            type: "Ferrari", <br/>
            model:"250 GTI", <br/>
            color:"red"};</p>
            <p> Okay, lets practice writing an object down below!<br/>
            Get creative, you can use any key words you want, just be sure to include <br/>
            <h4>cool beans</h4><br/>
            Keep in mind that objects need quotes around each key word and <br/>fancy curly brackets, { } , or as I like to call them Mustaches!
            <br/> We've included the mustaches for you, but keep it in mind for future references.
            <br/>
            <br/>
            <h4>Now show me what you've learned!</h4>
            `,
            playground: true ,
            className:'objectSlide',
            test: (obj) => {
                it("adds the two given numbers", () => {
                  expect(obj).toContain("cool beans");
                });
              },
    },
    {
        text: 'AVENGERS ASSEMBLE 🦸🏻‍♀️🦸🏻‍♂️',
        html: `
        <p>Okay, so you aren't into cars like that...<br/>
        Hopefully you didn't find that too challenging though. </p>
        <p>Let's talk about the only group of people who can save the world from ULTIMATE DESTRUCTION</p>
        <h4>The Avengers!</h4>
        <p> Soooo here are my top 4: <br/>
        Ironman, Hulk, Captain America, Black Widow  <br/>
        Anddddd let's not get distracted guys, we are here to learn about Objects! But I promise it can be fun. Lets add our Avenger buddies to an object.
        <span></span>
        <p>I'm going to leave it up to you guys to add the Avengers into an object.
         Just remember that values are written as
        
            Name : Value , </br>
            Name and Value are separated by a colon.</br>
        </p>
        <p> so here are the Names: Ironman, Hulk, Captain America, Black Widow  <br/>
        and here are the Values: smartest, greenest, oldest, coolest
            
        let avengers = {<br/>
            smartest: “Ironman”, <br/>
            greenest: “Hulk”,<br/>
            oldest: “Captain America”, <br/>
            coolest: “Black Widow”
        };
        
            <p>Congrats you built an object, and by doing so you made the Avengers a new squad!</p>`,
            className:'objectSlide',
            playground: true,
            test: (obj) => {
                it("adds the two given numbers", () => {
                  expect(obj).toContain(
                    "smartest: Ironman",
                    "greenest: Hulk",
                    "oldest : Captain America",
                    "coolest: Black Widow")
                });
              },
    },
    {
        text: 'Lets get inside that object!',
        html: `<p>There are two ways to get our Avengers team to assemble from that object. By using Dot Notation or Bracket Notation.</p>
        <span></span>
        Let's take the Hulk for example. What if we had to call that guy to save the world
        <H4>RIGHT NOW</H4>
        And I don't think we have him on speed dial lol.<br/><br/>
        Take a look below, these are the two ways we can call an object by it's Name and Value, remember that?

        <h4>  Bracket Notation : </h4>
          avengers[“greenest”] => Hulk
          <h4>Dot Notation:</h4> 
          avengers.greenest => Hulk
          <br/>
          <p>Easy Peasy huh?!<br/>
          Although there isn’t really any difference in using bracket or dot notation, dot notation is way more popular to use...<br/>and after all do we not want to be apart of the cool kids.</p>
          <span></span>
          Alrighty lets get to testing our new knowledge. Do me a favor, using Dot Notation, how would I call forward Captain America?
          <p>Remember from the previous lesson, this was how we ranked everyone : <br/>
         <br/>
         <br/>
          let avengers = {<br/>
            smartest: “Ironman”, <br/>
            greenest: “Hulk”, <br/>
            oldest: “Captain America”, <br/>
            coolest: “Black Widow” <br/>
        };
        </p>
          `,
          className:'objectSlide',
          playground: true,
          test: (obj) => {
            it("adds the two given numbers", () => {
              expect(obj).toContain("avengers.oldest");
            });
          },

    },
    {
        text: '🍕🍕 Meet my BFF Guys! 🍕🍕',
        html: `<br/>
        <br/>
        Okay don't get scared....but we are going to throw some math up in here!<br/>
        <p>Lets use our newfound knowledge of objects and create sentences with them!<br/><br/>
        Meet my bestest best friend forever John Smith</p>
        <h4>Example</h4>
        let person = { <br/>
            firstname:"John",<br/>
            lastname:"Smith",<br/>
            age:25,<br/>
            favoritefood: “Pizza” <br/>
        };<br/>
        
        <p>Sometimes John has a hard time saying what he feels, so let’s help him. He really loves pizza. How do we get him to say that
        <br/> <br/>"John loves Pizza?</p>
      <h4> (person.firstname + “loves + person.favoritefood) 
        => “John loves Pizza”<br/><br/></h4>
        Awesome job! <br/>
        Now one last thing, sometimes John forgets how old he is!! God talk about old people problems!<br/>
        Can you guys show me one last thing before we wrap up Objects. 
        Show me how we could show <br/><br/>
        "John is 25"`,
        className:'objectSlide',
        playground: true,
        test: (obj) => {
            it("adds the two given numbers", () => {
              expect(obj).toContain("person.firstname + ate + person.favoritefood");
            });
          },
    },
    // {
    //     text: '',
    //     html: ``,
    // },
]