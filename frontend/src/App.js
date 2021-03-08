import { describe, it, expect, run } from 'jest-lite';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/neat.css'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/javascript/javascript.js'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import { useEffect, useState } from 'react'
import './App.css';
import prettier from "prettier/standalone";
// import babylon from "prettier/parser-babel";
import Home from './components/Home'
// import AddPost from './components/AddPost'
// import AllPosts from './components/AllPosts'
import Auth from './components/Auth'
import Profile from './components/Profile'
import actions from './api'
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import Variablesp1 from './Variables/Variablesp1'
import Variablesp2 from './Variables/Variablesp2'
import Variablesp3 from './Variables/Variablesp3'
import Stringsp1 from './Strings/Stringsp1'
import Arraysp1 from './Arrays/Arrayp1'
import Arraysp2 from './Arrays/Arrayp2'
import Arraysp3 from './Arrays/Arrayp3'
import Arraysp4 from './Arrays/Arrayp4'
import Arraysp5 from './Arrays/Arrayp5'
// import Arraysp6 from './Arrays/Arrayp6'
import Objectsp1 from './Objects/Objectsp1'
import Objectsp2 from './Objects/Objectsp2'
import Objectsp3 from './Objects/Objectsp3'
import Objectsp4 from './Objects/Objectsp4'
import Functionsp1 from './Functions/Functionsp1'
import Parametersp1 from './Parameters/Parametersp1'




function App() {

  const [user, setUser] = useState({})
  let [value, setValue] = useState('')
  let [guess, setGuess] = useState('')

  const history = useHistory()

  useEffect(() => {
    actions.getUser().then(res => {
      setUser(res.data)
    }).catch(console.error)
  }, [])


  // const checkAnswer = () => {
  //   doesItPass(guess, history)
  //   formatCode()
  // }
  // const formatCode = () => {
  //   const formattedCode = prettier.format(guess, {
  //     parser: "babel",
  //     // plugins: [babylon]
  //   });
  //   console.log(formattedCode)
  //   setGuess(formattedCode);
  // };


  return (
    <div className="App">


      <h4>{user.email}</h4>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="all-posts">All Posts</Link>
        <Link to="add-posts">Add Post</Link> */}
        {!user.email ? <Link to="/auth">Log in</Link> : <Link to="/profile">Profile</Link>}


      </nav>

      {/* <CodeMirror
        value={guess}
        // options={options}
        //  value='<h1>I ♥ react-codemirror2</h1>'
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true
        }}
        onBeforeChange={(editor, data, value, next) => {

          next()
        }}
        onChange={(editor, data, value) => {
          console.log(editor, data, value)
          setGuess(value)
        }}
      /> */}
{/* 
      <button onClick={checkAnswer}>Submit Guess</button> */}

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        {/* <Route exact path="/all-posts" render={(props) => <AllPosts {...props} />} />
        <Route exact path="/add-posts" render={(props) => <AddPost {...props} />} /> */}
        <Route exact path="/auth" render={(props) => <Auth setUser={setUser} {...props} />} />
        <Route exact path="/profile" render={(props) => <Profile user={user} {...props} />} />



        {/* Topic Routes */}
        {/* Variables */}
        <Route exact path="/variables" render={(props) => <Variablesp1 {...props} />} />
        <Route exact path="/variablesp2" render={(props) => <Variablesp2 {...props} />} />
        <Route exact path="/variablesp3" render={(props) => <Variablesp3 {...props} />} />




        {/* Strings */}
        <Route exact path="/strings" render={(props) => <Stringsp1 {...props} />} />

        {/* Arrays */}
        <Route exact path="/arrays" render={(props) => <Arraysp1 {...props} />} />
        <Route exact path="/arraysp2" render={(props) => <Arraysp2 {...props} />} />
        <Route exact path="/arraysp3" render={(props) => <Arraysp3 {...props} />} />
        <Route exact path="/arraysp4" render={(props) => <Arraysp4 {...props} />} />
        <Route exact path="/arraysp5" render={(props) => <Arraysp5 {...props} />} />


        {/* Objects */}
        <Route exact path="/objects" render={(props) => <Objectsp1 {...props} />} />
        <Route exact path="/objectsp2" render={(props) => <Objectsp2 {...props} />} />
        <Route exact path="/objectsp3" render={(props) => <Objectsp3 {...props} />} />
        <Route exact path="/objectsp4" render={(props) => <Objectsp4 {...props} />} />

        
        {/* Functions */}
        <Route exact path="/functions" render={(props) => <Functionsp1 {...props} />} />
        {/* Parameters */}
        <Route exact path="/parameters" render={(props) => <Parametersp1 {...props} />} />


      </Switch>

    </div>
  );
}
// function sum(x, y) {
//   return x + y;
// }
async function doesItPass(str, history) {
  console.log(str, typeof str)
  const sum = new Function('return ' + str)() //This is the part that needs to be better understood. 
  console.log(sum, typeof sum)
  describe('sum', () => {
    it('adds the two given numbers', () => {
      expect(sum(2, 2)).toBe(4);
    });
  });
  const result = await run();
  console.log(result);
  let lastResult = result.pop()
  if (lastResult.status == 'pass') {
    alert('pass')
    history.push('variablep2')
  } else {
    alert('try again')
  }
}
export default App;
