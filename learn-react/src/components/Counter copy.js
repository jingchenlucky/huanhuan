import React, { Component } from 'react';
import store from '../store';
import {
  asyncIncrease,
  asyncDecrease,
  decrease,
  increase,
} from '../store/action/count';
//展示组件
function Counter(props) {
  return (
    <div>
      <h1>{props.number}</h1>
      <p>
        <button onClick={props.onAsyncDecrease}>异步减</button>
        <button onClick={props.decrease}>减</button>
        <button onClick={props.increase}>加</button>
        <button onClick={props.onAsyncIncrease}>异步加</button>
      </p>
    </div>
  );
}
/**
 * 整个仓库的状态，映射到当前需要的数据
 */
function mapStateToProps(state) {
  return {
    number: state.count,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onAsyncDecrease() {
      dispatch(asyncDecrease());
    },
    decrease() {
      dispatch(decrease());
    },
    increase() {
      dispatch(increase());
    },
    onAsyncIncrease() {
      dispatch(asyncIncrease());
    },
  };
}
//容器组件
export default class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = mapStateToProps(store.getState());
    store.subscribe(() => {
      this.setState(mapStateToProps(store.getState()));
    });
  }
  render() {
    const eventHander = mapDispatchToProps(store.dispatch);
    return <Counter {...this.state} {...eventHander} />;
  }
}
