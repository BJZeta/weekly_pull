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
                <div>
                    <ul>
                        
                    </ul>
                </div>
            </div>
        )
    }
}
