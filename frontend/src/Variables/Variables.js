<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState } from "react";
>>>>>>> a84f3409e3c368ad411ba393938c37faa0c4ffff
import { slides } from "./VariableSlides";
import Playground from "../components/CodeEditor/Playground";
import { describe, it, expect, run } from "jest-lite";

console.log("hello");
function Variables(props) {
  let [page, setPage] = useState(props.match.params.page);
  let [code, setCode] = useState("");

<<<<<<< HEAD
  let [page, setPage] = useState(props.match.params.page);
  let [code, setCode] = useState("");

=======
>>>>>>> a84f3409e3c368ad411ba393938c37faa0c4ffff
  const switchPage = () => {
    setPage(Math.min(9, ++page));
    props.history.push(String(page));
  };

  const prevPage = () => {
    setPage(Math.max(1, --page));
    props.history.push(String(page));
  };

  async function doesItPass(str) {
    console.log(str, typeof str);
<<<<<<< HEAD
    const val = eval(str);
    //const sum = new String("return " + str)(); //This is the part that needs to be better understood.
    console.log(val, typeof val);
    describe("val", () => slides[page]?.test(val));
=======
    const obj = eval(str);
    //const sum = new String("return " + str)(); //This is the part that needs to be better understood.
    console.log(obj, typeof obj);
    describe("obj", () => slides[page]?.test(obj));
>>>>>>> a84f3409e3c368ad411ba393938c37faa0c4ffff
    const result = await run();
    console.log(result);
    let lastResult = result.pop();
    if (lastResult.status == "pass") {
      alert("pass");
      props.history.push(String(++page));
    } else {
      alert("try again");
    }
  }

  return (
    <div>
      <h3>{slides[page]?.text}</h3>
      <div dangerouslySetInnerHTML={{ __html: slides[page]?.html }}></div>
      <br />
      {slides[page]?.playground ? (
        <>
          <Playground setCode={setCode} language="javascript" />
          <button onClick={() => doesItPass(code)}>Submit Answer</button>
        </>
      ) : null}
      <div
        style={{
          padding: "18vh",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
      <button onClick={prevPage}>Previous</button>
<<<<<<< HEAD
      <span></span>
      {props.match.params.page} {page} <span></span>
      <button onClick={switchPage}>Next</button>

=======
      {props.match.params.page}
      <button onClick={switchPage}>Next</button></div>
>>>>>>> a84f3409e3c368ad411ba393938c37faa0c4ffff
    </div>
  );
}

export default Variables;
