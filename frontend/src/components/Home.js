import React from "react";
import Playground from '../components/CodeEditor/Playground'
import { Switch, Route, Link, useHistory } from 'react-router-dom'

function Home(props) {
  return (
    <>
    <Playground />
      <h1>JSBuddy</h1>
{/* 
      <h2>JavaScript Learning Tool for Kids</h2>

      <img src={"./images/landingpage.png"} style={{width:'100vh'}} alt="kids" />
      <Switch>
        
      <Route exact path="/functions" render={(props) => <Functionsp1 {...props} />} />
      </Switch> */}
      <p>Hep</p>
      
    </>
  );
}

export default Home;
