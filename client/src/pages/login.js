import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div>

                <Navbar />

                <div id="loginAvatars">

                    <div id="spiderman"></div>
                    <div id="batman"></div>
                    <div id="thor"></div>

                </div>

                <div id="loginBoxArea">

                    <div class="card text-center">
                        <div class="card-body ">
                            <h5 class="card-title">Login</h5>
                            <input class="input" id="email"></input>
                            <input class="input" type="password" id="password"></input>
                            <a id="loginBtn" href="#" class="btn btn-primary"><Link to="/customerBox"><p id="signInTxt">Sign In</p></Link></a>
                            <a id="loginBtn" href="#" class="btn btn-primary"><Link to="/storeHome"><p id="signInTxt">Store Sign In</p></Link></a>
                        </div>
                    </div>
                </div>




            </div>
        )
    }
}

export default Login;