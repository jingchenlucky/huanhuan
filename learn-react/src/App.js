import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import RouteGuard from './RouteGuard';

function Page1() {
    return <div>page1</div>
}

function Page2() {
    return <div>page2</div>
}


export default function App(props) {
    return (

        <Router>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <Link to="/page1">页面1</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/page2">页面2</Link>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            <RouteGuard>
                <Route path='/page1' component={Page1}></Route>
                <Route path='/page2' component={Page2}></Route>
            </RouteGuard>
        </Router>


    );
}
