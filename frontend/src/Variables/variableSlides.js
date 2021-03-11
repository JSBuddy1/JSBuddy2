import { describe, it, expect, run } from "jest-lite";
export const slides = [
  {
    text: "Variable",
    html: `<h2>Introduction to Variables</h2>
        <p>Let’s start with an example from real life.</p>
        <p>
          You decided to pack all your stuff into different boxes and place them
          into some storage.<br/>
           You put labels on each box so you can easier find it
          later, and obviously, the name is descriptive, so you know what is in
          that box.
        </p>
  
        <p>Analogy:</p>
  
        <p>
          storage is a memory   
         
          the box is a variable
         
          the label is a variable name.
        </p>
        <img src={"./images/movingboxes.jpg"} alt="moving-boxes" />
  
        <p style={{ textAlign: "justify" }}> <br/>
          
          The main purpose of variables is to store some information. We can think
          of them as of some kind of boxes that hold some data. <br/>
          These boxes are
          labeled so we can get them at any point, or just in certain situations
          when we need them, access to them. <br/> <b/> Very common way of saying - access to
          variable - is reference a variable by its name/label. <br/>
    
        </p>`,
    playground: true,
    test: false,

  },
  {
    text: 'Yaay Guess what! 🤸‍♀️ its my favy Variables 🤸‍♂️',
    html: `<h1>JavaScript Variables : Part 1</h1>

        <p>JavaScript variables are containers for storing data values.</p>
  
        <p>
          In this example, x, y, and z, are variables, declared with the var
          keyword:
        </p>
  
        <p>
         
          Example: <br/>
          var x = 5;
          <br />
          var y = 6;
          <br />
          var z = x + y;
          <br />
          From the example above, you can expect:
        </p>
        <p>
          x stores the value 5<br/>
          y stores the value 6<br/>z stores the value 11
          <br/>
          Now let's have some fun!
          <br/>👇
        </p>`,


    playground: true,
    test: false,
  },
  {
    text: 'Still Grooving with our Variables',
    html: `<p>The new version of JavaScript allows the use of the const keyword to define
        a variable that cannot be reassigned, <br/>
         and the let keyword to define a variable with restricted scope.</p>
         <br/>
    <h1>Example: Variable Declaration & Initialization</h1>
        var one = 1; // variable stores numeric value<br/>

var two = 'two';  // variable stores string value<br/>

 var three;  // declared a variable without assigning a value<br/>

    <p>In the above example, we have declared three variables using var keyword:<br/>
    one, two and three. <br/>We have assigned values to variables one and two
    at the same time when we declared it,<br/> whereas variable three is declared
           but does not hold any value yet, so it's value will be 'undefined'.</p>

    <div>
      <h2>Declare Variables in a Single Line</h2><br/>
      <p>Multiple variables can also be declared in a single line separated by comma.</p><br/>
      <p><b>Example: Multiple Variables in a Single Line</b></p><br/>
      <p>var one = 1, two = 'two', three;</p><br/>

     

    </div>

    <div>
      <h2>Declare a Variable without var Keyword</h2>
      <p>JavaScript allows variable declaration without var keyword.<br/>
             You must assign a value when you declare a variable without var keyword.</p><b/>
    </div>

    <p>
      Example: Variable without var Keyword
          </p>
          one = 1;

          two = 'two';
          <p>var_name = value</p><br/>
          <p> a = 4</p>
    
    
          a, b = 4, 8 <br/>
         <p>print("value assigned to a")</p> <br/>
         <p>print(a) </p><br/>
         <p>print("value assigned to b")<p/> <br/>
         <p>print(b) </p><br/>
    
         <h3>Output</h3>
         <p>value assigned to a</p>
     4
    <p>value assigned to b</p>
    8
    
    
  },
    {
      text: <h2>Variable naming</h2>
    <p>There are two limitations on variable names in JavaScript:</p><br/>
    <p>The name must contain only letters, digits, or the symbols $ and _.</p><br/>
   <h2><p>The first character must not be a digit.</p></h2>
    <p>let userName;</p><br/>
    <p>let test123;</p>

    <p>When the name contains multiple words, camelCase is commonly used.<br/>
    That is: words go one after another, each word except first starting with a capital letter:<br/>
              myVeryLongName.</p>

    <p>What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names.<br/>
               They are regular symbols, just like letters, without any special meaning.</p>

    <p>These names are valid:</p><br/>
<p>let $ = 1; // declared a variable with the name "$"<br/>
      <p>let _ = 2; // and now a variable with the name "_"</p>
      <br/>

      <p>alert($ + _); // 3</p><br/>
      <h3>Examples of incorrect variable names:</h3><br/>
      <p>let 1a; // cannot start with a digit</p><br/>
      <p>let my-name; // hyphens '-' aren't allowed in the name</p><br/>


      <h4>Case matters</h4><br/>
      <p>Variables named apple and AppLE are two different variables.</p><br/>

      <h4>Reserved names</h4><br/>
      <p>There is a list of reserved words, </p><br/>
      <p>which cannot be used as variable names because they are used by the language itself.</p><br/>

      <p>For example: let, class, return, and function are reserved.</p><br/>

      <p>The code below gives a syntax error:</p><br/>

      <p>let let = 5; // can't name a variable "let", error!</p><br/>
      <p>let return = 5; // also can't name it "return", error!</p><br/>




`,
  },

]


