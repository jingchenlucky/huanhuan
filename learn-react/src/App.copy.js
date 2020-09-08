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
    let count=0;
    return (

        <Router getUserConfirmation={
            // (msg,callback)=>{
            // console.log("跳转页面没门,消息："+msg);
            // callback(true);}
            (msg,callback)=>{
                callback(window.confirm(msg))
        }}>
            <ul>
                <li>
                    <Link to="/page1">页面1</Link>
                </li>
                <li>
                    <Link to="/page2">页面2</Link>
                </li>
            </ul>
            <RouteGuard onChange={(prevLocation,location,action,unListen)=>{
                console.log(`${count++}从地址${prevLocation}变化为${location.pathname},变化方式${action}`);
                if(count===5){
                    unListen();
                }
            }}>
                <Route path='/page1' component={Page1}></Route>
                <Route path='/page2' component={Page2}></Route>
            </RouteGuard>
        </Router>


    );
}
