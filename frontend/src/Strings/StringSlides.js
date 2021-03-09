import { describe, it, expect, run } from "jest-lite";
export const slides = [
    {
        text: "Introduction to Strings",
    html:`
    <p>A string is a data type used in the programming languages which represents text.
    <br />
    It includes a set of characters that can also contain spaces and numbers.
    <br />
    For example, the word “hamburger” and the phrase “I ate three hamburgers” are both strings.
    <br />
    Typically, you must enclose strings in quotation marks for the data to recognize as a string.
    <br />
    In this article, we will discuss the details and usage of “String in JavaScript”
    covering across the following topics:
    <br />
    </p>

    <ul>
        <ol>What are strings in JavaScript?</ol>
        <ol>How to initialize Strings in JavaScript?</ol>
        <ol>What inbuilt functions are provided by Strings in JavaScript?</ol>
        <ol>Understanding String’s Html wrapper methods?</ol>
    </ul>


    <p>
        Similar to other programming languages, the String is one of the data types in Javascript,
        which represent a sequence of characters. Still, in JavaScript,
        String can be both a primitive data type and a composite data type.
        In actual, the string in JavaScript is an object which lets you work with a series of characters
        and possesses the following characteristics:
    </p>
    <ul>
        <ol>A string represents any text inside a quote pair, and the quote pair can consist of either double or single quotes.</ol>
        <ol>JavaScript doesn’t impose any limit on the number of characters that a string can hold,
                but most of the old browsers support 255 characters only.</ol>
        <ol>In addition to the above, JavaScript doesn’t have a particular type that represents a single character of String.
        To represent a single character, we need to use a string of length 1.
           </ol>
    </ul>

    <p>Lets deep dive further to understand how to declare and use strings in JavaScript.</p>`,
    playground: false,
  },
  {
      text: 'How to initialize String in JavaScript?',
      html: `
      <p>In JavaScript, we can initialize a String in the following two ways:</p>

      <ul>
          <ol>Using String literal</ol>
          <ol>Using “new” Keyword</ol>
      </ul>
      <p>Let’s discuss both of these ways in the sections below:
          </p>

      <h2>Initializing String using “String literal” method:</h2>
      <p>While creating a string object using the “string literal,” the value of the String is assigned directly to the variable.
               We assign the value using the single quotes or double-quotes. Moreover, its syntax looks like below:</p>

      <p>

          <br />
                 var variableName = ‘literal’; // Using single quotes

                 var variableName = "literal"; // Using double quotes
               </p>

      <p>let string = "I love Disney"</p>

      <p>If you don't do this, or miss one of the quotes,
                   you'll get an error.</p>
      <p><b>Try entering the following lines:</b></p>
      <ul>
          <ol>let wrongString1 = This is a trial;</ol>
          <ol>let wrongString2 = 'This is a trial;</ol>
          <ol>let wrongString3 = This is a trial';</ol>
      </ul>

      <p>These lines don't work because any text without quotes around it is assumed
      to be a variable name, property name, a reserved word, or similar.
      If the browser can't find it, then an error is raised
      (e.g. "missing; before statement").
      If the browser can see where a string starts,
      but can't find the end of the string,
      as indicated by the 2nd quote,
      it complains with an error (with "unterminated string literal").
      If your program is raising such errors, then go back
      and check all your strings to make sure you have no missing quote marks
          </p>

      <p>The following will work if you previously defined the variable string
               — try it now:</p>

      <pre class=" brush: js notranslate"></pre>
      <code>
          <span class="token keyword">let</span>
                   "badString"
                   <span class="token operator">=</span>
                   "string"
                   <span class="token punctuation">;</span>
                   "badString"
                   <span class="token punctuation">;</span>
      </code>
      <pre>
          <code>
              badString
                   </code>
                   "is now set to have the same as value"
                   <code>string</code>
      </pre>`,
  },
  {
      text: 'Single quotes vs. double quotes',
      html: `<p>In JavaScript, you can choose single quotes or double quotes to wrap your strings in.
      Both of the following will work okay:</p>
  <code>
      let sgl = 'Single quotes.';
      let dbl = "Double quotes";
      sgl;
      dbl;
      </code>

  <p>There is very little difference between the two,
  and which you use is down to personal preference.
  You should choose one and stick to it, however;
  differently quoted code can be confusing,
  especially if you use two different quotes on the same string!
          The following will return an error:</p>

  <code>
      <p>let badQuotes = 'What on earth?";</p>
  </code>

  <p>The browser will think the string has not been closed
  because the other type of quote you are not using to
  contain your strings can appear in the string.
                For example, both of these are okay:</p>
  <code>
      let myDog = 'Hunter is smarter than yours "🤣🤣"?';
      let chihuahua = "Always bark but can't bite.";
      myDog;
      chihuahua;
                 </code>

  <p>However, you can't include the same quote mark inside the string
  if it's being used to contain them. The following will error,
                     as it confuses the browser as to where the string ends</p>

  <code>
      <p>let bigmouth = 'I've got no right to take my place...';</p>
  </code>

  <p>This leads us very nicely into our next subject.</p>


  <h2>Escaping characters in a string</h2>
  <p>To fix our previous problem code line, we need to escape the problem quote mark.
  Escaping characters means that we do something to them to make sure
  they are recognized as text, not part of the code. In JavaScript,
   we do this by putting a backslash just before the character. Try this:</p>

  <code>
      <p>let bigmouth = 'I\'ve got no right to take my place...';
       bigmouth;</p>
  </code>

  <p>This works fine. You can escape other characters in the same way, e.g. \",
       and there are some special codes besides</p>

  <h2>Concatenating strings</h2>
  <p>Concatenate is a fancy programming word that means "join together".
  Joining together strings in JavaScript uses the plus (+) operator,
  the same one we use to add numbers together,
  but in this context it does something different.
              Let's try an example in our console.</p>
  <code>
      <p>let one = 'Hello, ';</p>
      <p>let two = 'how are you?';</p>
      <p>let joined = one + two;</p>
      <p>joined;</p>
  </code>

  <div>
      <p>The result of this is a variable called joined,
      which contains the value "Hello, how are you?".
      In the last instance, we joined only two strings,
      but you can join as many as you like,
      as long as you include a + between each pair.
                    Try this:</p>
  </div>

  <code>
      <p>let multiple = one + one + one + one + two;
                         multiple;</p>
  </code>

  <p> You can also use a mix of varibales and actual strings. Try this:</p>`,
  },
  {
      text: 'How to initialize String in JavaScript?',
      html: `p>In JavaScript, we can initialize a String in the following two ways:</p>

      <ul>
          <ol>Using String literal</ol>
          <ol>Using “new” Keyword</ol>
      </ul>
      <p>Let’s discuss both of these ways in the sections below:
          </p>

      <h2>Initializing String using “String literal” method:</h2>
      <p>While creating a string object using the “string literal,” the value of the String is assigned directly to the variable.
               We assign the value using the single quotes or double-quotes. Moreover, its syntax looks like below:</p>

      <p>

          <br />
                 var variableName = ‘literal’; // Using single quotes

                 var variableName = "literal"; // Using double quotes
               </p>

      <p>let string = "I love Disney"</p>

      <p>If you don't do this, or miss one of the quotes,
                   you'll get an error.</p>
      <p><b>Try entering the following lines:</b></p>
      <ul>
          <ol>let wrongString1 = This is a trial;</ol>
          <ol>let wrongString2 = 'This is a trial;</ol>
          <ol>let wrongString3 = This is a trial';</ol>
      </ul>

      <p>These lines don't work because any text without quotes around it is assumed
      to be a variable name, property name, a reserved word, or similar.
      If the browser can't find it, then an error is raised
      (e.g. "missing; before statement").
      If the browser can see where a string starts,
      but can't find the end of the string,
      as indicated by the 2nd quote,
      it complains with an error (with "unterminated string literal").
      If your program is raising such errors, then go back
      and check all your strings to make sure you have no missing quote marks
          </p>

      <p>The following will work if you previously defined the variable string
               — try it now:</p>

      <pre class=" brush: js notranslate"></pre>
      <code>
          <span class="token keyword">let</span>
                   "badString"
                   <span class="token operator">=</span>
                   "string"
                   <span class="token punctuation">;</span>
                   "badString"
                   <span class="token punctuation">;</span>
      </code>
      <pre>
          <code>
              badString
                   </code>
                   "is now set to have the same as value"
                   <code>string</code>
      </pre>`,
  },
//   {
//       text: '',
//       html: ``,
//   }
]