import React from 'react';
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import RootRouter from './RootRouter';

export default function App(props) {
    return (
        <div>
            <Router>
                <nav>
                    <Link to="/">首页</Link>
                    <Link to="/news">新闻页 </Link>
                </nav>
                <div>
                    <Switch>
                        {/*匹配顶级页面*/}
                        <RootRouter/>
                        {/*<Route path="/news" compnonet="News" exact={true}></Route>*/}
                    </Switch>

                </div>
            </Router>
        </div>
    );
}
