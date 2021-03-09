import { describe, it, expect, run } from "jest-lite";
export const slides = [
  {
    text: "Aaaaa",
    html: `   <h3>What is an Array?</h3>
  <p>An array is a special variable, which can hold more than one value at a time.</p>
  <p>If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:</p>
  <p>var car1 = "Saab";<br/>
     var car2 = "Volvo";<br/>
  var car3 = "BMW";</p>

  <p>However, what if you want to go through the cars and find a specific one? And what if you had not 3 cars, but 300?</p>
  <p>The solution is an array!</p>
  <p>An array can hold many values under a single name, and you can access the values by referring to it by what number in line it is</p>`,
    playground: true,
  },
  { text: "Bbbbbb", playground: false },
  {
    text: "Ccccccc",
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
