import React, {Component} from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class StoreHome extends Component{
    render(){
        return(
            <div>
                <Navbar/>

            </div>
        )
    }
}

export default StoreHome;
