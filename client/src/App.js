import React from 'react';
import Landing from "./pages/landing/index";
import Login from "./pages/login";
import StoreHome from "./pages/Profile";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CustomerBox from "./pages/CustomerBox";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/login" component={Login}/>
      <Route path="/customerBox" component={CustomerBox}/>
      <Route path="/storeHome" component={StoreHome}/>
      </Switch>
    <div className="container">
      {/* <Landing/> */}
    </div>
    
    </Router>
    
  );
}

export default App;
