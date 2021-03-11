import { describe, it, expect, run } from 'jest-lite';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/neat.css'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/javascript/javascript.js'
import { useEffect, useState } from 'react'
import './App.css';
// import babylon from "prettier/parser-babel";
import Home from './components/Home'
import Auth from './components/Auth'
import Profile from './components/Profile'
import actions from './api'
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import Variables from './Variables/Variables'
import Strings from './Strings/Strings'
import Arrays from './Arrays/Arrays'
import Objects from './Objects/Objects'
import Functions from './Functions/Functions'


function App() {

  const [user, setUser] = useState({})
  //const history = useHistory()

  useEffect(() => {
    actions.getUser().then(res => {
      setUser(res.data)
    }).catch(console.error)
  }, [])

  return (
    <div className="App">

      <h4>{user.email}</h4>
      <nav>
        <Link to="/">Home</Link>

        {!user.email ? <Link to="/auth">Log in</Link> : <Link to="/profile">Profile</Link>}
      </nav>

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/auth" render={(props) => <Auth setUser={setUser} {...props} />} />
        <Route exact path="/profile" render={(props) => <Profile user={user} {...props} />} />

        {/* Topic Routes */}
        {/* Variables */}
        <Route exact path="/variables/:page" render={(props) => <Variables {...props} />} />


        {/* Strings */}
        <Route exact path="/strings/:page" render={(props) => <Strings {...props} />} />

        {/* Arrays */}
        <Route exact path="/arrays/:page" render={(props) => <Arrays {...props} />} />

        {/* Objects */}
        <Route exact path="/objects/:page" render={(props) => <Objects {...props} />} />

        {/* Functions */}
        <Route exact path="/functions/:page" render={(props) => <Functions {...props} />} />

      </Switch>
    </div>
  );
}


export default App;
