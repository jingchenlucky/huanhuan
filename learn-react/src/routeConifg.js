import React from 'react';
import Counter from './Counter';
import { routerRedux, Route, NavLink } from 'dva/router';

function Home() {
  return <div>首页</div>;
}
export default function routeConifg(props) {//prop是在调用routeConifg自动传入的
  return (
    <routerRedux.ConnectedRouter history={props.history}>
      <div>
        <ul>
          <li>
            <NavLink to="/">首页</NavLink>
          </li>
          <li>
            <NavLink to="/counter">计数器</NavLink>
          </li>
        </ul>
        <div>
          <Route path="/" component={Home} />
          <Route path="/counter" component={Counter} />
        </div>
      </div>
    </routerRedux.ConnectedRouter>
  );
}
