import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
// 倒入容器组件
// import Counter from './components/Counter';
// import StudentSearch from './components/StudentSearch';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { ConnectedRouter } from 'connected-react-router';
import history from './store/history';
export default function App() {
  return (
    <Provider store={store}>
      {/* <StudentSearch /> */}
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={Admin}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
} 
