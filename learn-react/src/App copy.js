import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
import CounterContainer from './components/Counter';
//自己手动实现connect功能  对应Counter copy.js
export default function App() {
  return (
    // <Provider store={store}>
    <div>
      <CounterContainer />
    </div>
    // </Provider>
  );
}
