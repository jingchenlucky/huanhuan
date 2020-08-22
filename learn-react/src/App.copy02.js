import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
    return (<div>找不到页面
        <Route path="/abc" component={D}/>
    </div>)
}

function D() {
    return (<div>组件D</div>)
}

export default function App(props) {
    return (
        <Router>
            <Switch>
                <Route path="/a" component={A}/>
                <Route path="/a/b" component={B}/>
                <Route component={C}/>
            </Switch>

        </Router>

    );
}
