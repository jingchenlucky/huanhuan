import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import qs from 'query-string';

function A(props) {
    console.log(props,props.location)
    var query = qs.parse(props.location.search)
    var hash = qs.parse(props.location.hash);
    console.log(query, hash);
    return (
        <>
            <div>组件A</div>
            <div>路径地址：</div>
            <div>地址参数：a:{query.a}b:{query.b}</div>
            <div>hash:d:{hash.d}e:{hash.e}</div>
        </>
    )
}

function notFound() {
    return (
        <div>找不到页面。。</div>
    )
}

export default function App(props) {
    return (
        <Router>
            <Switch>
                <Route path="/a" component={A}/>
                <Route component={notFound}/>
            </Switch>
        </Router>
    );
}

