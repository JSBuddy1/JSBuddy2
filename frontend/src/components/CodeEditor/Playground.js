import React, { useEffect, useState } from 'react';
import Editor from './Editor'


function Playground() {
const [html, setHtml] = useState('')
const [js, setJs] = useState('')

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

const srcDoc = `
<html>
<body>${html}</body>
<script>${js}</script>
</html>
`

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
        language="javascript"
        displayName="JS"
        value={js}
        onChange={setJs}
        />
        </div>

        <div className="pan">
        <iframe className="pan2"
                srcDoc={srcDoc}
                title="output"
                sandbox='allow-same-origin allow-scripts allow-popups allow-forms' 
                frameBorder="0"
                width="50%"
                height="50%"
                />

        </div>
        </>
    );
}

export default Playground;