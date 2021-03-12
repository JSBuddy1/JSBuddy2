import { describe, it, expect, run } from "jest-lite";
export const slides = [
  {
    text: "What is an Array?",
    html: `<p>An array is a special variable, which can hold more than one value at a time.</p>
        <p>If you have a list of items (a list of colors, for example), storing the colors in single variables could look like this:</p>
        <p>let color1 = "Red";<br/>
           let color2 = "Blue";<br/>
           let color3 = "Green";</p>

        <p>However, what if you want to go through the colors and find a specific one? And what if you had not 3 colors, but 300!!!!!!!!!</p>
        <p>The solution is an array!</p>
        <p>An array can hold many values under a single name, and you can access the values by referring to it by what number in line it is
        </p><br/>
        Check out this nifty little code editor down below. You can practice writing all the colors you can dream of in array form! <br/>Check it out. Once you're ready click next for the next lesson.
`,
    playground: true,
    id: "let" ,
    className: "arraySlideT let",
    test: (arr) => {
      it("adds the two given numbers", () => {
        expect(arr).toContain("cool beans");
      });
    },
    button: false
  },
  {
    text: "Declaration",
    html: `<p>In JavaScript, an array is declared using square brackets ---> [ ].</p>
       
            <p>Whatever is in the array, we will refer to it as the element of that
            array;<br/>
          <br/>
          Elements in the array are separated with commas;<br/>
          <br/>
          Elements are numbered, starting with zero;<br/><br/>
          
          We can access each element, using the particular position of that
            element. Like strings, the index starts at 0.
          </p>
        </ul>
  
        <h3>Example:</h3>
        <p>let animalsArray = [];</p>
        <p>const animalsArray = ['dog', 'cat', 'rabbit'];</p>
        <p>Here is your first array! And it’s a furry one!</p>
        <p>Help me make an array containing <br/> (Micky, Minnie, Donald, Goofy)<br/>
        Don't forget your quotes for every word!`,
    playground: true,
    className: "const",
    className: "arraySlideT let",
    test: (arr) => {
      it("adds the two given numbers", () => {
        expect(arr).toContain("Micky, Minnie, Donald, Goofy");
      });
    },
  },
  {
    text: "Adding and Removing Elements",
    html: `Alright not too bad so far huh?<br/> I think we are ready to start learning some more cool ways to manipulate arrays with!<br/>
    <br/><p>It would be useless not to be able to change the structure of the array, either by adding elements or removing them.</p>
        <p>Certain array methods allow us to manipulate with array elements, so let’s talk about:</p>
        <h3>Push & Pop</h3>
        <p>Using .push lets you add a new element to the end of the array! Think of it like pushing someone into the back of a long line.</p>
        <h3>Examples</h3>
        <p>const cookiesArray = [<br/>
          “chocolate chip”,<br/> “oreos”,<br/> “sugar cookies”];</p>
        <p>=> chocolate chip, oreos, sugar cookies</p>
        <h4>And now we push!</h4>
        <p>cookiesArray.push “snickerdoodle”</p>
        <p> => chocolate chip, oreos, sugar cookies, snickerdoodle</p>
        
        <br/>
        <img src='/images/greatJob.webp' alt="great job"/>
        `

        
  ,className: "arraySlideT let",
  playground: true, 
  button: false,
  },
  {
    text: "Pop!",
    html: `<h3>OH NO!!!!</h3>
        <p>You are about to make your mom all these cookies 🍪 and forgot she doesn’t like cinnamon! <br/> Now we definitely should take snickerdoodles out of the list!</p>

        <p>If you want to remove that unwanted last element from your wonderful cookies array 🍪 , all you need to do is pop it right out of there!</p>

        <p>Using .pop lets you remove the last element of the array. Simple as that right? </p>

        <h3>Examples</h3>

        <p>const  cookiesArray = [<br/>
          “chocolate chip”,<br/>
          “oreos”,<br/>
          “sugar cookies”, <br/>
          “snickerdoodles”]</p>
          <br/>
        <p>cookiesArray.pop() => chocolate chip, oreos, sugar cookies</p>
          TADAAAAAAA<br/>
          No<br/><br/>
          More<br/><br/>
          Snickerdoodles!!<br/><br/>
        <img src='/images/cookie.jpeg' style={{width:'100vh'}} alt="cookies"/>
            <p>Ohhhweeee<br/> 
            Thank goodness we took those snickerdoodles out of moms wonderful cookie arrangement.<br/> We don’t want her feeling like she is about to do the cinnamon challenge do we?</p>`,
    className: "arraySlideT let",
    playground: true,
    button: false
  },
  {
    text: "Unshift",
    html: `<p> Alright onto the last topic!</p>
        <h4> Unshift</h4>

        <p>If you need to add an element to the front of the array, you are talking about using unshift!</p>
        <p>Just remember, .pop makes you number 1.</p>

            <p>Got mom some milk 🥛 and flowers 🌷 so she can really enjoy her day?! You are so thoughtful. But wait..<br/>Maybe mom is too old for just milk and cookies, maybe you can throw some coffee ☕️ in there so she can have more choices? <br/>After all she is your favorite person right!</p>
         <h3>Example</h3>   

            <p>const superFunExtraStuffArray = <br/>
            [“milk”,<br/> 
            “chocolates”, <br/>
            “roses”] <br/>
            [🥛 , 🍫 ,🌹]<br/><br/>

          superFunExtraStuffArray => milk, chocolates, roses<br/><br/>
            Now lets add that coffee to the front of the list like we talked about<br/>
            <br/>simply use Unshift at the end and you're sent to go!<br/><br/>
            superFunExtraStuffArray.unshift(“coffee”)<br/><br/>
           => coffee, milk, chocolates, roses</p>
           <p>Okay time for a mini quiz, lets put our unshift knowledge to the test<br/>
           Remember our array with Mickey, Minnie, Donald, and Goofy? Well I think Pluto is missing!<br/>
           How would I add Pluto to the front of our disneyArray?
           `,
    className: "arraySlideT let",
    playground: true,
    test: (arr) => {
      it("adds the two given numbers", () => {
        expect(arr).toContain(`.unshift('Pluto')`);
      });
    },
  },
  {
    text:'Shift',
    html:`<p>Okay so if unshift addes to the front of the array, we know that .shift removes the first element in an array<p>
    <p>On the previous test we added Pluto to the front of our array, but unfortunately he's not feeling too well and wants to stay home <br/>
    So let's take him out of our disneyArray.</p>
    All you have to do is: <br/>
    disneyArray.shift() <br/>
    And our dear friend Pluto went back to bed to recover :(
    
    `,
    playground: true,
    className: "arraySlideT let",
    test: (arr) => {
      it("adds the two given numbers", () => {
        expect(arr).toContain("disneyArray.shift()");
      });
    },
  },

  {
      text: 'Knowledge Test!',
      html: `Alrighty guys. I know you're super duper excited to move on to the next top and be one step closer to being a pro<br/>
      BUT WAIT, I just want to make sure you're ready to fly little birdy 🕊<br/>
      <p> Alright so for the final part in Arrays, all I want you to show me is, what method would I use to remove the last element in an array?</p>
      <br/>
      <p> Use the myLastArray and remove the last element!</p>
      `
      ,
      className: "arraySlideT let",
      playground: true,
      test: (arr) => {
        it("adds the two given numbers", () => {
          expect(arr).toContain("myLastArray.pop()");
        });
      },
  }
];
