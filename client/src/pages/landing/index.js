import React from "react";
import { setPriority } from "os";

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
            <div id="customer"></div>
            <div id="store"></div>
            </div>


        </div>


    )
}

export default Landing;