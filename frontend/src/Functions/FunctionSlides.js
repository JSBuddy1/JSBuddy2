import { describe, it, expect, run } from "jest-lite";
export const slides = [
  {
    className: "fun1",
    text: "Functions",
    html: `<p>What the heck is it?</p>
    <p><b>function</b> add(a, b) { </p>
    <p> return  a + b; </p>
    <p> } </p>
    <p>Fancy word which pretty much allows us to write a set of code to accomplish a goal.</p>
    <p>A JavaScript <b>function</b> is defined with the <b>function</b> keyword, followed by a name, followed by parentheses ().</p>
    <p>The word <b>function</b> cannot be replaced for another word sorry :-/ </p>
    <p><b>Function</b> names can contain letters, digits, underscores, and dollar signs (same rules as variables).</p>
    <p>Above we used add but you can call it poop or dragon or mutants. Skys the limit.</p>
    <p>Just remember as your code grows you want to make it something that you'll remember. <p>
    <p><b>Function</b> parameters are listed inside the parentheses () in the <b>function</b> definition.</p>
    <p>The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)</p>
    <p>The code to be executed, by the <b>function</b>, is placed inside curly brackets aka moustaches: {} </p>
    <p>Below is a code editor to play around with. </p>
    <p>Feel free to go wild and see what you can come up. Remember just press enter to create a new line.</p>`,
    playground: true,
    button: false
  },
  { 
    className: "fun2",
    text: "Parameters", 
  html:`<p>Yay more knowledge</p>
  <p>We mentioned these dudes last section</p>
  <p>function add(a, b) { </p>
  <p> return  a + b; </p>
  <p> } </p>
  <p>The paramters in this case are the a and b guys.</p>
  <p>Just like the function names you can name these fellows to your hearts content.</p>
  <p>Function parameters are the names listed in the function definition.</p>
  <p>This would be the first a and b next to function
  <p>Function arguments are the real values passed to (and received by) the function.</p>
  <p>This would the a and b pair that are on the 2nd line next to return. </p>
  <p>Yes you can name them poop1 and pee1 if you wanted to.</p>
  <p>Remember 3 things</p>
  <p>JavaScript function definitions do not specify data types for parameters.</p>
  <p>JavaScript functions do not perform type checking on the passed arguments.</p>
  <p>JavaScript functions do not check the number of arguments received.</p>
  <p>The code thing is below if you want to try stuff out.</p>`, playground: true,
  button: true },
  {
    className: "fun1",
    text: "Ooooh Knowledge Check Fool", 
    html: `<p>Lets write a function that subtracts.</p>
    <p>First we need a function and we need to declare 2 parameters.</p>
    <p>Lets call our function awesomeSauce.</p>
    <p>The two parameters will be mangos and oranges (Was going to use bananas but oranges are better)</p>
    <p><b>function</b> awesomeSauce(mangos, oranges) { </p>
    <p> return  mangos - oranges; </p>
    <p> } </p>
    <p>The little fellow above next to oranges ; (semi-colon) can be left or they can be taken out.</p>
    <p>You have the power to do with his life as you see fit.</p>
    <p>Here is your knowledge check.</p>
    <p>Write a function that adds two parameters.</p>
    <p>If you're a smarty pants and know about invoking that will not be required at this time.</p>
    <p>If you have no clue what the heck that is no worries we will discuss later.</p>
    <p>All you need to do is a write a function that adds 2 parameters.</p>
    <p>You got this dude and dudettes.</p>`,
    playground: true,
    button: true,
    test: (fn) => {
      it("adds the two given numbers", () => {
        expect(fn(2, 2)).toBe(4);
      });
    },
  },

  {
    className: "fun2",
    text: "You Guessed It More Knowledge Check",  
    html: `<p>Lets write a function that divides.</p>
    <p>First we need a function and we need to declare 2 parameters.</p>
    <p>Lets call our function hiddenLeaf.</p>
    <p>The two parameters will be chakra and anbu (Nerd alert)</p>
    <p><b>function</b> hiddenLeaf(anbu, chakra) { </p>
    <p> return  anbu / chakra; </p>
    <p>Here is your knowledge check.</p>
    <p>Write a function that multiplies two parameters.</p>
    <p>Again smarty pants you will not be required at this time to invoke.</p>
    <p>We will discuss later in this section so no worries if you are like what the heck .</p>
    <p>All you need to do is a write a function that multiplies 2 parameters.</p>
    <p>Good luck.</p>`,
    playground: true,
    button: true,
    test: (fn) => {
      it("multiply the two given numbers", () => {
        expect(fn(2, 24)).toBe(48);
      });
    },
  },

{
  className: "fun1",
  text: "We Can Do More Than Just Math",
  playground: true,
  html: `<p>Up to this point we have been using functions to do basic arithmetic</p>
  <p>Lets write some functions that can do other some other stuff</p>
  <p>Suppose someone sent me something in all caps and I was like no lets bring this down a notch</p>
  <p>You know it lets function this son of a gun<p>
  <p>First lets start with our function lets have it umm I know digimon</p>
  <p>Next we will leave the () empty since we will not be passing anything on those dudes</p>
  <p>Next comes the moustaches {}<p>
  <p>So inside the {} lets add some info</p>
  <p>We have to declare a variable here which will be the string that will be transformed.</p>
  <p>let letter = 'I HEARD THAT YOURE DIGImon WEAK as FUdge';</p>
  <p>So above we just declared our string but now we need to affect it.</p>
  <p>So in javascript there are a bunch of words that allow you to do lots of cool stuff</p>
  <p>In this case we will use .toLowerCase which will convert any letter into lowercase</p>
  <p>let newLetter = letter.toLowerCase(); } <p>
  <p>So lets see it in action</p>
  <p>function digimon() { </p>
  <p> let letter = 'I HEARD THAT YOURE DIGImon WEAK as FUdge'; </p>
  <p> let newLetter = letter.toLowerCase(); </p>
  <p> return newLetter; </p>
  <p> } </p>
  `
},

  {
    className: "fun2",
    text: "Its That Time Again Knowledge Check",
    html: `<p>We be back this time lets make a string into all uppercase</p>
    <p>Im no douche so no worries I will provide the word that will make it function</p>
    <p>When you write the function make sure to include the word digimon in your string</p>
    <p>
    <p>Our word here is .toUpperCase </p>`,
    playground: true,
    button: true,
    test: (fn) => {
      it("where is digimon", () => {
        expect(fn("digimon")).toContain("DIGIMON");
      });
    },
  },
  {
    className: "fun1",
    text: "Function Invocation", 
    html: `<p>Invoke what is this magic?</p>
<p>The code inside a function is not executed when the function is defined. </p>
<p>The code inside a function is executed when the function is invoked. </p>
<p>It is common to use the term "call a function" instead of "invoke a function".</p>
<p>It is also common to say "call upon a function", "start a function", or "execute a function".</p>
<p>We will use invoke, because a JavaScript function can be invoked without being called.</p>
<p>So looking back at our previous example</p>
<p><b>function</b> add(a, b) { </p>
<p> return  a + b; </p>
<p> } </p>
<p>In order to use our function lets invoke it</p>
<p>We would need to write the name of the function and insert a value for our parameters</p>
<p>add(10, 21);</p>
<p>This is how it would look together</p>
<p><b>function</b> add(a, b) { </p>
  <p> return  a + b; </p>
  <p> } </p>
<p>add(10, 21);</p>
<p>Our result would be 31</p>`,
  },

  {
    className: "fun2",
    text:"Return / Console.Log",
    html:`<p>So far you have noticed that we have been inputing return in our functions</p>
    <p>There is another option as well which is console.log<p>
    <p>There is a difference when you invoke it though</p>
    <p><b>function</b> add(a, b) { </p>
      <p> return  a + b; </p>
      <p> } </p>
    <p>add(10, 21);</p>
    <p>Now lets say we want to console.log</p>
    <p><b>function</b> add(a, b) { </p>
      <p>console.log a + b; </p>
      <p> } </p>
    <p>console.log(add(10, 21));</p>
    <p>A return statement in a function will return a value and stop further execution. </p>
    <p>Where as Console.log() is a side effect producing function that will print the arguments supplied to it in the console.</p>
    <p>As your code gets more complex you will either want to return a value or console log and continue the work.</p>
    <p>Its quite easy to check just right check anywhere on the page and select inspect<p>
    <p>Once there just select console and when you write a function you will see your result on that terminal</p>
    <p>Try it out below and go wild.</p>`,
    playground: true,
  },
  {
    className: "fun1",
    text:"Version 2.0 Coming Soon ",
    html:`<p>You have made it to the end of this section.</p>
    <p>Great job peeps.</p>
    <p>Hopefully this introduction has given you an idea of some of the stuff you can do with functions</p>
    <p>This is just the begining and there are boatload of information out there to expand and continuing growing your skills.</p>`,
  }
];
