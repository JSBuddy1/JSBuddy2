import React, { useState } from "react";
import { slides } from "./ObjectSlides";
import Playground from "../components/CodeEditor/Playground";
import { describe, it, expect, run } from "jest-lite";

function Objects(props) {
  let [page, setPage] = useState(props.match.params.page);
  let [code, setCode] = useState("");

  const switchPage = () => {
    setPage(Math.min(3, ++page));
    props.history.push(String(page));
  };

  const prevPage = () => {
    setPage(Math.max(1, --page));
    props.history.push(String(page));
  };

  async function doesItPass(str) {
    console.log(str, typeof str);
    const obj = eval(str);
    //const sum = new String("return " + str)(); //This is the part that needs to be better understood.
    console.log(obj, typeof obj);
    describe("obj", () => slides[page]?.test(obj));
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
      <div dangerouslySetInnerHTML={{ __html: slides[page]?.html }}></div>
      <br />
      {slides[page]?.playground ? (
        <div >
          <Playground setCode={setCode} language="javascript" />
          <button onClick={() => doesItPass(code)}>Submit Answer</button>
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

export default Objects;
