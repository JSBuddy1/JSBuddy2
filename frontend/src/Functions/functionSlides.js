import { describe, it, expect, run } from "jest-lite";
export const slides = [
  {
    text: "Functions",
    html: `
    <p>What the heck is it?</p>
    <p><b>function</b> add(a, b) {"{"} </p>
    <p> return  a + b; </p>
    <p>{"}"} </p>
    <p>Fancy word which pretty much allows us to write a set of code to accomplish a goal.</p>
    <p>A JavaScript function is defined with the <b>function</b> keyword, followed by a name, followed by parentheses ().</p>
    <p><b>Function</b> names can contain letters, digits, underscores, and dollar signs (same rules as variables).</p>
    <p>Function parameters are listed inside the parentheses () in the function definition.</p>
    <p>The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)</p>
    <p>The code to be executed, by the function, is placed inside curly brackets aka moustaches: {"{}"} </p>
    <p>Pratice below and write a function with the name of multiplication that takes 2 parametrs(x and y)</p>
    <p>That returns 10 * 100</p>`,
    playground: false,
  },
  { text: "Parameters", html:`
  <p>Eww what is that?</p>
  <p>A JavaScript function does not perform any checking on parameter values (arguments).</p>
  <p><b>function</b> add(a, b) {"{"} </p>
  <p> return  a + b; </p>
  <p>{"}"} </p>
  <p>Fancy word which pretty much allows us to write a set of code to accomplish a goal.</p>
  <p>A JavaScript function is defined with the <b>function</b> keyword, followed by a name, followed by parentheses ().</p>
  <p><b>Function</b> names can contain letters, digits, underscores, and dollar signs (same rules as variables).</p>
  <p>Function parameters are listed inside the parentheses () in the function definition.</p>
  <p>The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)</p>
  <p>The code to be executed, by the function, is placed inside curly brackets aka moustaches: {"{}"} </p>
  <p>Pratice below and write a function with the name of multiplication that takes 2 parametrs(x and y)</p>`, playground: false },
  {
    text: "Function Invocation", html: `<p>Invoke what is this magic?</p>
    <p>The code inside a function is not executed when the function is defined. </p>
    <p>The code inside a function is executed when the function is invoked. </p>
    <p>It is common to use the term "call a function" instead of "invoke a function".</p>
    <p>It is also common to say "call upon a function", "start a function", or "execute a function".</p>
    <p>We will use invoke, because a JavaScript function can be invoked without being called.</p>
    <p>So looking back at our previous example</p>
    <p><b>function</b> add(a, b) {"{"} </p>
    <p> return  a + b; </p>
    <p>{"}"} </p>
    <p>In order to use our function lets invoke it</p>
    <p>We would need to write the name of the function and insert a value for our parameters</p>
    <p>add(10, 21);</p>
    <p>Our result would be 31</p>`,
    playground: true,
    test: (fn) => {
      it("adds the two given numbers", () => {
        expect(fn(2, 2)).toBe(4);
      });
    },
  },

  {
    text: "Ddddddcccc",
    playground: true,
    test: (fn) => {
      it("multiply the two given numbers", () => {
        expect(fn(2, 24)).toBe(48);
      });
    },
  },

  {
    text: "there is no I in team",
    playground: true,
    test: (fn) => {
      it("there is no I in team", () => {
        expect(fn("hi")).toBe("HI");
      });
    },
  },
];
