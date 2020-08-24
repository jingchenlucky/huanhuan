import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function User({match}) {
    console.log(match);
    return (
        <div>
            <h1>User组件固定区域</h1>
            <p>
                <Link to={`${match.url}/update`}>用户信息</Link>
                <Link to={`${match.url}/pay`}>用户充值</Link>
            </p>
            <Route path={`${match.url}/update`} component={UserUpdate}></Route>
            <Route path={`${match.url}/pay`} component={UserPay}></Route>
        </div>
    )
}

function UserUpdate() {
    return (
        <div>修改用户信息</div>
    )
}

function UserPay() {
    return (
        <div>用户充值中心</div>
    )
}

export default function App(props) {
    return (
        <Router>
            <Route path="/user" component={User}></Route>
        </Router>
    );
}
