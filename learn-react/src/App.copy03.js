import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function News(props) {
    console.log(props);
    console.log(props.match);
    return (
        <>
            <p>显示{props.match.params.year}年{props.match.params.month}月{props.match.params.day}日</p>
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
                <Route path="/news/:year?/:month?/:day?" component={News}/>
                <Route component={notFound}/>
            </Switch>
        </Router>
    );
}

