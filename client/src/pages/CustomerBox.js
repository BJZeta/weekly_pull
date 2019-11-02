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
                <Navbar />
                <div id="welcomeTxt">
                    <h1>Welcome, Brandon!</h1>
                </div>

                <div id="pullBox">
                    <h3 id="statement">Here are the comics in your PullBox</h3>

                    <div id="comicContainer">
                        <div class="comics" id="comic1"><div class="summary">Summary: Worshiped as a god since the dawn of civilization, the immortal Apocalypse (Oscar Isaac) becomes the first and most powerful mutant..</div></div>
                        <div class="comics" id="comic2"><div class="summary">Summary: The Marauders is a team of fictional supervillain characters appearing in American comic books published by Marvel Comics.</div></div>
                        <div class="comics" id="comic3"><div class="summary">Summary: Aquaman (Arthur Curry) is a fictional superhero appearing in American comic books published by DC Comics.</div></div>

                    </div>




                </div>
            </div>
        )
    }
}

export default CustomerBox;
