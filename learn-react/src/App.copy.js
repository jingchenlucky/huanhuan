import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

// import Link from './Link';

function A() {
    return (
        <div>组件A</div>
    )
}

function B() {
    return (
        <div>组件B</div>
    )
}

function NavBar() {
    return (
        <>
            <Link to="/a">去A页面</Link>
            <Link to={{
                pathname: '/b',
                hash: '#abc',
                search: '?a=1&b=2'
            }}>去B页面</Link>
        </>
    )
}

export default function App(props) {
    return (
        <Router>
            <NavBar/>
            <Route path="/a" component={A}></Route>
            <Route path="/b" component={B}></Route>
        </Router>
    );
}
