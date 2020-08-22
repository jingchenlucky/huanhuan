import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

//  匹配路径 /a
function A() {
    return (<div>组件A</div>)
}
//       /b
function B() {
    return (<div>组件B</div>)
}
//       /c
function C() {
    return (<div>组件C</div>)
}

export default function App(props) {
    return (
        <Router>
            <Route path="/a" component={A}/>
            <Route path="/a/b" component={B}/>
            <Route path="/a/c" component={C}/>
        </Router>

    );
}
