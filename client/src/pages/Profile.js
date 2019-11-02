import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class StoreHome extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <div class="container">
                <div id="customers"><div>Customers</div></div>
                <div class="row">
                    <div class="column">
                        <div class="col-sm">
                            BJZeta
                            <div class="warning"><div class="request">New PullBox Request</div></div>
                            <div class="bin"><div class="request">Remove Comic Request</div></div>
                        </div>
                        <div class="col-sm">
                            Salbltrn
                            <div class="warning"><div class="request">New PullBox Request</div></div>
                         </div>
                        <div class="col-sm">
                            Aizeke
                            <div class="warning"><div class="request">New PullBox Request</div></div>
                         </div>
                    </div>
                    <div class="column">
                        <div class="col-sm">
                            JavTheSage
                            <div class="warning"><div class="request">New PullBox Request</div></div>
                        </div>
                        <div class="col-sm">
                            Simpleton
                            <div class="warning"><div class="request">New PullBox Request</div></div>
                         </div>
                        <div class="col-sm">
                            Samuel Justicia Roberto
                            <div class="warning"><div class="request">New PullBox Request</div></div>
                         </div>
                    </div>
                    <div class="column">
                        <div class="col-sm">
                            Valerie
                            <div class="warning"><div class="request">New PullBox Request</div></div>
                        </div>
                        <div class="col-sm">
                            Bryan
                            <div class="warning"><div class="request">New PullBox Request</div></div>
                         </div>
                        <div class="col-sm">
                            RandomUser
                            <div class="warning"><div class="request">New PullBox Request</div></div>
                         </div>
                    </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default StoreHome;
