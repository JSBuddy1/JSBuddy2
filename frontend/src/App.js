import { useEffect, useState } from 'react'
import './App.css';
import Home from './components/Home'
import AddPost from './components/AddPost'
import AllPosts from './components/AllPosts'
import Auth from './components/Auth'
import Profile from './components/Profile'
import actions from './api'
import { Switch, Route, Link } from 'react-router-dom'





function App() {

  const [user, setUser] = useState({})

  useEffect(() => {
    actions.getUser().then(res => {
      setUser(res.data)
    }).catch(console.error)
  }, [])

  return (
    <div className="App">

      <h1>JSBuddy</h1>
      <h2>JavaScript Learning Tool for Kids</h2>
      <img src={`frontend/src/images/landingpage.png`} alt="kids"/>
      <h4>{user.email}</h4>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="all-posts">All Posts</Link>
        <Link to="add-posts">Add Post</Link> */}
        {!user.email ? <Link to="/auth">Log in</Link> : <Link to="/profile">Profile</Link>}


      </nav>


      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        {/* <Route exact path="/all-posts" render={(props) => <AllPosts {...props} />} />
        <Route exact path="/add-posts" render={(props) => <AddPost {...props} />} /> */}
        <Route exact path="/auth" render={(props) => <Auth setUser={setUser} {...props} />} />
        <Route exact path="/profile" render={(props) => <Profile user={user} {...props} />} />
      </Switch>

    </div>
  );
}

export default App;
