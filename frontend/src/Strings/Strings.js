import React, {useState} from "react";
import {slides} from "./StringSlides";
import Playground from "../components/CodeEditor/Playground";
import {describe, it, expect, run} from "jest-lite";

function Strings(props) {
    let [page, setPage] = useState(props.match.params.page);

    let [code, setCode] = useState("");
  
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
        const sum = new String("return " + str)(); //This is the part that needs to be better understood.
        console.log(sum, typeof sum);
        describe("sum", () => slides[page]?.test(sum));
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
      <br></br> <br></br>
      <button onClick={prevPage}>Previous</button>
      <span></span>
      {props.match.params.page} {page} <span></span>
      <button onClick={switchPage}>Next</button>
        </div>
    );
}

export default Strings;