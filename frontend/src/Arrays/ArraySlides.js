import { describe, it, expect, run } from "jest-lite";
export const slides = [
  {
    text: "What is an Array?",
    html: `<p>An array is a special variable, which can hold more than one value at a time.</p>
        <p>If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:</p>
        <p>var car1 = "Saab";<br/>
           var car2 = "Volvo";<br/>
        var car3 = "BMW";</p>

        <p>However, what if you want to go through the cars and find a specific one? And what if you had not 3 cars, but 300?</p>
        <p>The solution is an array!</p>
        <p>An array can hold many values under a single name, and you can access the values by referring to it by what number in line it is</p>
`,
    playground: true,
    className: "let" ,
    className: "arraySlide",
    test: (arr) => {
      it("adds the two given numbers", () => {
        expect(arr).toContain("cool beans");
      });
    },
  },
  {
    text: "Declaration",
    html: `<p>In JavaScript, an array is declared using square brackets ---> [ ].</p>
       
            <p>whatever is in the array, we will refer to it as the element of that
            array;<br/>
          <br/>
          elements in the array are separated with commas;<br/>
          <br/>
          elements are numbered, starting with zero;<br/><br/>
          
            we can access each element, using the particular position of that
            element. Like strings, the index starts at 0.
          </p>
        </ul>
  
        <h3>Example:</h3>
        <p>let animalsArray = [];</p>
        <p>const animalsArray = ['dog', 'cat', 'rabbit'];</p>
        <p>Here is your first array! And it’s a furry one!</p>`,
    playground: true,
    className: "const",
    className: "arraySlide",
    test: (arr) => {
      it("adds the two given numbers", () => {
        expect(arr).toContain("cool beans");
      });
    },
  },
  {
    text: "Adding and Removing Elements",
    html: `<p>It would be useless not to be able to change the structure of the array, either by adding elements or removing them.</p>
        <p>Certain array methods allow us to manipulate with array elements, so let’s talk about:</p>
        <h3>Push & Pop</h3>
        <p>Using .push lets you add a new element to the end of the array! Think of it like pushing someone into the back of a long line.</p>
        <h3>Examples</h3>
        <p>const cookiesArray = [“chocolate chip”, “oreos”, “sugar cookies”]</p>
        <p>console.log(‘cookiesArray’) => chocolate chip, oreos, sugar cookies</p>
        <h4>And now we push!</h4>
        <p>cookiesArray.push “snickerdoodle”</p>
        <p>console.log(‘cookiesArray’) => chocolate chip, oreos, sugar cookies, snickerdoodle</p>`,
  className: "arraySlide",
  },
  {
    text: "Pop!",
    html: `<h3>OH NO!!!!</h3>
        <p>You are about to make your mom all these cookies 🍪 and forgot she doesn’t like cinnamon! <br/> Now we definitely should take snickerdoodles out of the list!</p>

        <p>If you want to remove that unwanted last element from your wonderful cookies array 🍪 , all you need to do is pop it right out of there!</p>

        <p>Using .pop lets you remove the last element of the array. Simple as that right? </p>

        <h3>Examples</h3>

        <p>const  cookiesArray = [“chocolate chip”, “oreos”, “sugar cookies”, “snickerdoodles”]</p>
        <p>cookiesArray.pop() => chocolate chip, oreos, sugar cookies</p>

        <img src={'./images/cookies.jpeg'} style={{width: ""}} alt="cookies"/>
            <p>Ohhhweeee thank goodness we took those snickerdoodles out of moms wonderful cookie arrangement.<br/> We don’t want her feeling like she is about to do the cinnamon challenge do we?</p>`,
    className: "arraySlide",
  },
  {
    text: "Shift & Unshift",
    html: `<p>  It would be useless not to be able to change the structure of the array, either by adding elements or removing them.</p>

        <p>Certain array methods allow us to manipulate with array elements, so let’s talk about:</p>

        <h4>Shift & Unshift</h4>

        <p>If you need to add an element to the front of the array, you are talking about using unshift!</p>
        <p> Remember, it makes you number 1.</p>

            <p>Got mom some milk 🥛 and flowers 🌷 so she can really enjoy her day?! You are so thoughtful. But wait..<br/>Maybe mom is too old for just milk and cookies, maybe you can throw some coffee ☕️ in there so she can have more choices? <br/>After all she is your favorite person right!</p>
         <h3>Example</h3>   

            <p>const superFunExtraStuffArray = [“milk”, “chocolates”, “roses”] [🥛 , 🍫 ,🌹]<br/>
            console.log(‘superFunExtraStuffArray’) => milk, chocolates, roses<br/>
            Now lets add that coffee to the front of the list like we talked about<br/>
            const superFunExtraStuffArray = [“milk”, “chocolates”, “roses”]<br/>
            superFunExtraStuffArray.unshift(“coffee”)<br/>
            console.log(‘superFunExtraStuffArray’) => coffee, milk, chocolates, roses</p>`,
    className: "arraySlide",
  },
  // {
  //     text: '',
  //     html: ``,
  // },
];
