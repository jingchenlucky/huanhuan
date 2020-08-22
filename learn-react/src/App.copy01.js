import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function A(props) {
    console.log(props);
    return (
        <>
            <div>组件A</div>
            <button onClick={() => {
                props.history.replace('/b', "状态数据")
            }}>跳转到组件B
            </button>
        </>
    )
}

function notFound() {
    return (
        <div>找不到页面。。</div>
    )
}

function B(props) {
    console.log('B组件信息', props);
    return (
        <>
            <div>组件B</div>
            <p> 获取状态数据：{props.history.location.state}</p>
            <button onClick={() => {
                props.history.replace('/a')
            }}>跳转到组件A
            </button>
        </>

    )
}

export default function App(props) {
    return (
        <Router>
            <Switch>
                <Route path="/a" component={A}/>
                <Route path="/b" component={B}/>
                <Route component={notFound}/>
            </Switch>
        </Router>
    );
}

