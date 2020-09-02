import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Personnal from './Personnal';
import ProtectRoute from './ProtectRoute';

export default function App(props) {
    return (
        <div>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>首页</Link>
                        </li>
                        <li>
                            <Link to='/Login'>登录</Link>
                        </li>
                        <li>
                            <Link to='/Personnal'>私人</Link>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path="/login" component={Login}/>
                            {/*渲染匹配后component对应组件*/}
                            <ProtectRoute path="/personnal" component={Personnal}/>
                            {/*渲染匹配后render返回内容；render和children区别：render是匹配后才会显示，children不论是否匹配都会显示*/}
                            {/*<Route path="/personnal" render={(value) => {*/}
                            {/*    console.log(value);*/}
                            {/*    return <h1>123456</h1>*/}
                            {/*}}/>*/}
                            <Route path="/" component={Home}/>

                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}
