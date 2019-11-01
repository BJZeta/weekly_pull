import React, { Component } from 'react';
import Navbar from '../components/Navbar'

class CustomerBox extends Component {
    state = {
        user: '',
        pullbox: [],
        store_news: []
    }

    

    render() {
        return (
            <div>
                <Navbar/>
                <div id="welcomeTxt">
                    <h1>Welcome, Brandon!</h1>
                </div>

                <div id="pullBox">
                <h3 id="statement">Here are the comics in your PullBox</h3>
                <ul>




                </ul>
                </div>
            </div>
        )
    }
}

export default CustomerBox;
