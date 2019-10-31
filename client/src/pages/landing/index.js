import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Landing() {
    return (
        <div id="logoContainer" className="container">

            <div id="logo"></div>

            <div id="landingContent">
                <h1>The Pull Box</h1>
            </div>

            <div id="landingContent2">
                <h1>Are You A Customer Or A Store Front</h1>
            </div>

            <div id="landingContent3">
           <Link to="/login"><div id="customer"></div></Link>
            <div id="store"></div>
            </div>


        </div>


    )
}

export default Landing;