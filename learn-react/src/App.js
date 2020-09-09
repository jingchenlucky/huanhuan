import React from 'react';
import * as Pages from './Page';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App(props) {
    return (
        <div>
            <Router>
                <Pages.NavBar></Pages.NavBar>
                <Route path="/" component={Pages.Home} exact/>
                <Route path="/news" component={Pages.News} exact/>
                <Route path="/personal" component={Pages.Personal} exact/>
            </Router>
        </div>
    );
}

export default App;
