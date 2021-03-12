import React, { useState } from "react";
import { slides } from "./ArraySlides";
import Playground from "../components/CodeEditor/Playground";
import { describe, it, expect, run } from "jest-lite";

function Arrays(props) {
  let [page, setPage] = useState(props.match.params.page);
  let [code, setCode] = useState("");

  const switchPage = () => {
    setPage(Math.min(6, ++page));
    props.history.push(String(page));
  };

  const prevPage = () => {
    setPage(Math.max(1, --page));
    props.history.push(String(page));
  };

  async function doesItPass(str) {
    console.log(str, typeof str);
    const arr = eval(str);
    //const arr = new Array(str); //This is the part that needs to be better understood.
    console.log(arr, typeof arr);
    describe("arr", () => slides[page]?.test(arr));
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
    <div className={slides[page]?.className}>
      <h3>{slides[page]?.text}</h3>
      <div dangerouslySetInnerHTML={{ __html: slides[page]?.html}}></div>
        
      <br/>
      {slides[page]?.playground ? (
        <div>
          <Playground setCode={setCode} language="javascript" />
          {!slides[page]?.button ? null:<button onClick={() => doesItPass(code)}>Submit Answer</button>}
        </div>
      ) : null}
      <br></br> <br></br>
      <div
        style={{
          padding: "18vh",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
          <button onClick={prevPage}>Previous</button>
        {props.match.params.page}
        <button onClick={switchPage}>Next</button>
      </div>
    </div>
  );
}

export default Arrays;
