import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Landing() {
    return (
        <div id="logoContainer">

            <div id="logo"></div>

            <div id="landingContent">
                <h1>The PullBox</h1>
            </div>

            <div id="landingContent2">
                <h1>Are You A Customer Or A Store Front</h1>
            </div>

            <div id="landingContent3">
           <Link to="/login"><div id="customer"></div></Link>
           <Link to="/login"><div id="store"></div></Link>
            </div>


        </div>


    )
}

export default Landing;