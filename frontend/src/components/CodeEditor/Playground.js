import React, { useEffect, useState } from "react";
import Editor from "./Editor";

function Playground(props) {
  const [html, setHtml] = useState("");
  const [js, setJs] = useState("");

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

        <Editor
          language={props.language}
          displayName="JS"
          value={js}
          onChange={typing}
        />
      </div>
    </>
  );
}

export default Playground;
