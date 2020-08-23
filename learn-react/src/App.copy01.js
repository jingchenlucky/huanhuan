import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom"
import './App.css'

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
            <NavLink to="/a" activeClassName="selected" activeStyle={{background: '#ccc'}}>去A页面</NavLink>
            <NavLink to={{
                pathname: '/b',
                hash: '#abc',
                search: '?a=1&b=2'
            }} activeClassName="selected" activeStyle={{background: '#ccc'}}>去B页面</NavLink>
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
