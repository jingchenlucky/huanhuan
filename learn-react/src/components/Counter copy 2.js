import React from 'react';
import {
  asyncIncrease,
  asyncDecrease,
  decrease,
  increase,
} from '../store/action/count';
import { connect } from 'react-redux';
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
function mapStateToProps(state,ownProps) {
  console.log("使用者容器组件加上额外的属性",ownProps)
  return {
    number: state.count,
  };
}
//用法1:用的最多
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
// export default class CounterContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = mapStateToProps(store.getState());
//     store.subscribe(() => {
//       this.setState(mapStateToProps(store.getState()));
//     });
//   }
//   render() {
//     const eventHander = mapDispatchToProps(store.dispatch);
//     return <Counter {...this.state} {...eventHander} />;
//   }
// }
 
//实现和CounterContainer一样的功能
//写法1
// //connect返回一个高阶组件
// const hoc = connect(mapStateToProps, mapDispatchToProps);
// //传入展示组件，返回一个容器组件
// export default hoc(Counter);
//写法2
export default connect(mapStateToProps, mapDispatchToProps)(Counter)