import React from 'react';
import Landing from "./pages/landing/index";
import Login from "./pages/login";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/login" component={Login}/>
    <div className="container">
      <Landing/>
    </div>
    </Switch>
    </Router>
    
  );
}

export default App;
