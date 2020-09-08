import React from 'react';
import {Route, Link} from 'react-router-dom';
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
        <RouteGuard
            onBeforeChange={(prevLoaction, location, action, callback, unBlock) => {
                // console.log("想要改变");
                console.log(`页面想要从${prevLoaction.pathname}跳转到${location.pathname}，跳转方式是${action}，允许跳转`)
                callback(true);
                unBlock();//取消阻塞，仅阻塞了一次
            }}
            onChange={(prevLocation, location, action, unListen) => {
                console.log(`监听器日志：${count++}从地址${prevLocation}变化为${location.pathname},变化方式${action}`);
                if (count === 5) {
                    unListen();
                }
            }}
        >
            <ul>
                <li>
                    <Link to="/page1">页面1</Link>
                </li>
                <li>
                    <Link to="/page2">页面2</Link>
                </li>
            </ul>

            <Route path='/page1' component={Page1}></Route>
            <Route path='/page2' component={Page2}></Route>
        </RouteGuard>


    );
}
