import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
// 倒入容器组件
import Counter from './components/Counter';
export default function App() {
  return (
    <Provider store={store}>
      <Counter  abc={123}/>
    </Provider>
  );
}
