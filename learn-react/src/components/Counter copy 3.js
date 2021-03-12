import React from 'react';
import {
  asyncIncrease,
  asyncDecrease,
  decrease,
  increase,
} from '../store/action/count';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//展示组件
function Counter(props) {
  return (
    <div>
      <h1>{props.number}</h1>
      <p>
        <button onClick={props.onAsyncDecrease}>异步减</button>
        <button onClick={props.onDecrease}>减</button>
        <button onClick={props.onIncrease}>加</button>
        <button onClick={props.onAsyncIncrease}>异步加</button>
      </p>
    </div>
  );
}
/**
 * 整个仓库的状态，映射到当前需要的数据
 */
function mapStateToProps(state, ownProps) {
  console.log('使用者容器组件加上额外的属性', ownProps);
  return {
    number: state.count,
  };
}
//用法2:
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onAsyncDecrease: asyncDecrease,
      onAsyncIncrease: asyncIncrease,
      onDecrease: decrease,
      onIncrease: increase,
    },
    dispatch,
  );
}

//实现和CounterContainer一样的功能
//写法1
// //connect返回一个高阶组件
// const hoc = connect(mapStateToProps, mapDispatchToProps);
// //传入展示组件，返回一个容器组件
// export default hoc(Counter);
//写法2
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
