import { Controlled as CodeMirror } from 'react-codemirror2'
import { useEffect, useState } from 'react'
import './App.css';
import Home from './components/Home'
// import AddPost from './components/AddPost'
// import AllPosts from './components/AllPosts'
import Auth from './components/Auth'
import Profile from './components/Profile'
import actions from './api'
import { Switch, Route, Link } from 'react-router-dom'
import Variablesp1 from './Variables/Variablesp1'
import Stringsp1 from './Strings/Stringsp1'
import Arraysp1 from './Arrays/Arrayp1'
import Objectsp1 from './Objects/Objectsp1'
import Functionsp1 from './Functions/Functionsp1'
import Parametersp1 from './Parameters/Parametersp1'



function App() {

  const [user, setUser] = useState({})

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
        {/* <Link to="all-posts">All Posts</Link>
        <Link to="add-posts">Add Post</Link> */}
        {!user.email ? <Link to="/auth">Log in</Link> : <Link to="/profile">Profile</Link>}


      </nav>

      <CodeMirror
        //value={this.state.value}
        // options={options}
        value='<h1>I ♥ react-codemirror2</h1>'
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true
        }}
        onBeforeChange={(editor, data, value) => {
          //this.setState({ value });
        }}
        onChange={(editor, data, value) => {
          console.log(editor, data, value)
        }}
      />

      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        {/* <Route exact path="/all-posts" render={(props) => <AllPosts {...props} />} />
        <Route exact path="/add-posts" render={(props) => <AddPost {...props} />} /> */}
        <Route exact path="/auth" render={(props) => <Auth setUser={setUser} {...props} />} />
        <Route exact path="/profile" render={(props) => <Profile user={user} {...props} />} />



        {/* Topic Routes */}
        <Route exact path="/variables" render={(props) => <Variablesp1 {...props} />} />
        <Route exact path="/strings" render={(props) => <Stringsp1 {...props} />} />
        <Route exact path="/arrays" render={(props) => <Arraysp1 {...props} />} />
        <Route exact path="/objects" render={(props) => <Objectsp1 {...props} />} />
        <Route exact path="/functions" render={(props) => <Functionsp1 {...props} />} />
        <Route exact path="/parameters" render={(props) => <Parametersp1 {...props} />} />


      </Switch>

    </div>
  );
}

export default App;
