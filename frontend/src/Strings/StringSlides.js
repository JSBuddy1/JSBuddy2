import { describe, it, expect, run } from "jest-lite";
export const slides = [
    {
        text: <a href="https://www.javascripttutorial.net/javascript-string/">"Introduction to Strings"</a>,
        html: `<p>A string is a data type used in the programming languages which represents text.
    <br/>
    <p>It includes a set of characters that can also contain spaces and numbers.</p>
    <br/>
   <p> For example, the word “hamburger” and the phrase “I ate three hamburgers” are both strings. </p>
    <br/>
    <p> Typically, you must enclose strings in quotation marks for the data to recognize as a string.</p>
    <br/>
    <p> In this article, we will discuss the details and usage of “String in JavaScript”</p>
    covering across the following topics:
    <br/>
    </p>

    
        <p>What are strings in JavaScript?</p>
        <br/>

        How to initialize Strings in JavaScript?
        <br/>
        What inbuilt functions are provided by Strings in JavaScript?
        <br/>
        Understanding String’s Html wrapper methods?
        <br/>
   


    <p>
        <p>Similar to other programming languages, the String is one of the data types in Javascript,</p>
        
        <p>which represent a sequence of characters. Still, in JavaScript,</p>
        
        String can be both a primitive data type and a composite data type.
        <br/>
        <p>In actual, the string in JavaScript is an object which lets you work with a series of characters</p>
        <br/>
        and possesses the following characteristics:
        <br/>
    </p>
    
        A string represents any text inside a quote pair, and the quote pair can consist of either double or single quotes.</ol>
        <br/>
        JavaScript doesn’t impose any limit on the number of characters that a string can hold,
        <br/>
                but most of the old browsers support 255 characters only.
                </ol>
        >In addition to the above, JavaScript doesn’t have a particular type that represents a single character of String.  <br/>
        To represent a single character, we need to use a string of length 1.
           </ol>
   

    <p>Lets deep dive further to understand how to declare and use strings in JavaScript.</p>`,
        playground: false,
        ClassName: "stringSlider",
        // test: (str) => {
        //     console.log(str)
        //     it("likes 'em big", () => {
        //         expect(str).toContain("big");
        //     });


        // },
    },
    {
        text: 'How to initialize String in JavaScript?',
        html: `<p>In JavaScript, we can initialize a String in the following two ways:</p>

      
          Using String literal
          <br/>
          >Using “new” Keyword
          <br/>
      </ul>
      <p>Let’s discuss both of these ways in the sections below:
      <br/>
          </p>

      <h2>Initializing String using “String literal” method:</h2>
      <br/>
      <p>While creating a string object using the “string literal,” the value of the String is assigned directly to the variable.
      < br/>
               We assign the value using the single quotes or double-quotes. Moreover, its syntax looks like below:</p>
               <br/>

      <p><br/>
        var variableName = ‘literal’; // Using single quotes
                 <br/>

                 var variableName = "literal"; // Using double quotes
                 <br/>
               </p>

      <p>let string = "I love Disney"</p>
      <br/>

      <p>If you don't do this, or miss one of the quotes,
      <br/>
                   you'll get an error.</p>
      <p><b>Try entering the following lines:</b></p>
      <br/>
      <ul>
         let wrongString1 = This is a trial;
          <br/>
          let wrongString2 = 'This is a trial;
          <br/>
          let wrongString3 = This is a trial';
          <br/>
      </ul>

      <p>These lines don't work because any text without quotes around it is assumed</p>
      
      <p>to be a variable name, property name, a reserved word, or similar.</p>
      
     <p> If the browser can't find it, then an error is raised  </p>
      
     <p> (e.g. "missing; before statement").</p>
      
      <p> If the browser can see where a string starts, </p>
      
      but can't find the end of the string,
      <br/>
      as indicated by the 2nd quote,
      <br/>
      it complains with an error (with "unterminated string literal").
      <br/>
      If your program is raising such errors, then go back
      <br/>
      and check all your strings to make sure you have no missing quote marks
          </p>

      <p>The following will work if you previously defined the variable string
               — try it now:</p>`,

        playground: true,
        test: (str) => {
            console.log(str)
            it("likes 'em big", () => {
                expect(str).toContain("");
            });


        },


        text: 'Single quotes vs. double quotes',
        html: `<p> In JavaScript, you can choose single quotes or double quotes to wrap your strings in.
        <br/>
    Both of the following will work okay:</p>
  <code>
        let sgl = 'Single quotes.';
        let dbl = "Double quotes";
        sgl;
        dbl;
         

  <p>There is very little difference between the two,
  and which you use is down to personal preference.<br/>

  You should choose one and stick to it, however;
  differently quoted code can be confusing,<br/>
  especially if you use two different quotes on the same string!
          The following will return an error:</p>

  <code>
      <p>let badQuotes = 'What on earth?";</p>
  </code>

  <p>The browser will think the string has not been closed
  because <br/>the other type of quote you are not using to
  contain your strings can appear in the string.<br/>
                <br/><h3>For example, both of these are okay:</h3>
  
      let myDog = 'Hunter is smarter than yours "🤣🤣"?';<br/>
      <br/>let chihuahua = "Always bark but can't bite.";
      myDog;
      chihuahua;
                 

  <p>However, you can't include the same quote mark inside the string
  if it's being used to contain them.<br/> The following will error,
                     as it confuses the browser as to where the string ends</p>

  <code>
      <p>let bigMouth = 'I've got no right to take my place...';</p>
  </code>

  <p>This leads us very nicely into our next subject.</p>`,
        playground: true,
        // test: (str) => {
        //     console.log(str)
        //     it("likes 'em big", () => {
        //         expect(str).toContain("big");
        //     });


        // },
        button: false,

    },
    {
        text: 'Escaping characters in a string',
        html: `<p>To fix our previous problem code line, we need to escape the problem quote mark.</p><br/>
  <br/>Escaping characters means that we do something to them to make sure
  they are recognized as text, not part of the code. <br/>In JavaScript,
  <br/> we do this by putting a backslash just before the character. Try this:</p><br/>

  <code>
      <p>let bigmouth = 'I\'ve got no right to take my place...';
       bigmouth;</p>
  </code>

  <p>This works fine. You can escape other characters in the same way, e.g. \",
       and there are some special codes besides</p>

  <h2>Concatenating strings</h2>
  <p>Concatenate is a fancy programming word that means "join together".<br/>

  Joining together strings in JavaScript uses the plus (+) operator,<br/>

  the same one we use to add numbers together,
  but in this context it does something different.<br/>
              Let's try an example in our console.</p><br/>
  <code>
      <p>let one = 'Hello, ';</p>
      <br/>
      <p>let two = 'how are you?';</p>
      </br>
      <p>let joined = one + two;</p>
      <br/>
      <p>joined;</p>
  </code>

  <div>
      <p>The result of this is a variable called joined,
            which contains the value "Hello, how are you?".
      <br/.
      In the last instance, we joined only two strings,
      but you can join as many as you like,
      <br/>
      as long as you include a + between each pair.
                    Try this:</p>
  </div>

  
      <p>let multiple = one + one + one + one + two;
                         multiple;</p> <br/>
  

  <p> You can also use a mix of varibales and actual strings. Try this?????:</p>`,

        playground: true,
        test: (str) => {
            console.log(str)
            it("likes 'em big", () => {
                expect(str).toContain("big");
            });
        },
    },



    {
        text: 'How to initialize String in JavaScript?',
        html: `In JavaScript, we can initialize a String in the following two ways:</p>

     
          <p>Using String literal</p></br >
          <p>Using “new” Keyword</p><br/>
      
      <p><h4>Let’s discuss both of these ways in the sections below:
          <h4></p>

      <h2>Initializing String using “String literal” method:</h2>
      <p>While creating a string object using the “string literal,” <br/>
      the value of the String is assigned directly to the variable.<br/>
               We assign the value using the single quotes or double-quotes. Moreover, its syntax looks like below:</p><br/>


      <p>

          <br/>
                 var variableName = ‘literal’; // Using single quotes<br/>

                 var variableName = "literal"; // Using double quotes
               </p><br/>

      <p>let string = "I love Disney"</p>

      <p>If you don't do this, or miss one of the quotes,
                   you'll get an error.</p><br/>
      <p><b>Try entering the following lines:</b></p>
      
          let wrongString1 = This is a trial;<br/>
          let wrongString2 = 'This is a trial;<br/>
          let wrongString3 = This is a trial'; <br/>
      

      <p>These lines don't work because any text without quotes around it is assumed
       <br/>
      to be a variable name, property name, a reserved word, or similar.
      <br/>
      If the browser can't find it, then an error is raised
      <br/>
      (e.g. "missing; before statement").
      <br/>
      If the browser can see where a string starts,
    
      but can't find the end of the string,
      <br/>
      as indicated by the 2nd quote,

      it complains with an error (with "unterminated string literal").
      <br/>If your program is raising such errors, then go back
      and check all your strings to make sure you have no missing quote marks
          </p>

      <p>The following will work if you previously defined the variable string
               — try it now:</p>

      
     
                  let "badString" = "string"; <br/>
                  badString is now set to have the same as value string<br/>

                  So now let Try this!!!<br/>

                  <br/>Create a string that says your name and how old you are!<br/>`,
        playground: true,
        test: (str) => {
            console.log(str)
            it("should be a certain length", () => {
                expect(str).toHaveLength(4)
            });
        },
        button: false
    },
    {
        text: 'To Learn More',
        html: `Visit this websites and you will amazed on what you can do with this common "string" <br/>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">
    <br/> The Genesis of Strings</a><br/>
    <a href="https://www.w3schools.com/jsref/jsref_obj_string.asp"><br/>Take a Look</a><br/>
    <a href="https://javascript.info/string"><br/>I love Strings</a><br/> <br/>
    
    <img src='/images/codingKid.jpg' alt='kid coding' /> `,
        playground: false,
    }
]
