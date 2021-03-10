import React, { useEffect, useState } from "react";
import Editor from "./Editor";

function Playground(props) {
  const [html, setHtml] = useState("");
  const [js, setJs] = useState("");

  // useEffect(() => {
  //     const timeout = setTimeout(() => {
  //     setSrcDoc(`
  //     <html>
  // <script>${html}</script>
  // <script>${js}</script>
  // </html>
  //     `)
  //     }, 250)
  // }, [js])

  const typing = (e) => {
    setJs(e);
  };

  const srcDoc = `
<html>
<body>${html}</body>
<script>${js}</script>
</html>
`;
  props.setCode(js);
  console.log(js);
  return (
    <>
      <div className="top-pan">
        {/* <Editor 
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
            /> */}
        <Editor
          language={props.language}
          displayName="JS"
          value={js}
          onChange={typing}
        />
      </div>

      <div className="pan">
        <iframe
          className="pan2"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          frameBorder="0"
          width="50%"
          height="50%"
        />
      </div>
    </>
  );
}

export default Playground;
