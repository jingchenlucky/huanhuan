import React, { useRef } from 'react';
import { connect } from 'dva';
import Modal from './components/common/Modal';
function Counter(props) {
  const inp = useRef();
  return (
    <>
      <div>数字：{props.number}</div>
      <button onClick={props.onDecrease}>-</button>
      <button onClick={props.onIncrease}>+</button>
      <button onClick={props.onAsyncDecrease}>异步-</button>
      <button onClick={props.onAsyncIncrease}>异步+</button>
      <p>
        <input type="number" ref={inp} />
        <button
          onClick={() => {
            const n = parseInt(inp.current.value);
            props.onAdd(n);
          }}
        >
          加上
        </button>
      </p>
      {props.isLoading && (
        <Modal>
          <div style={{ fontSize: '2em' }}>加载中....</div>
        </Modal>
      )}
    </>
  );
}
function mapStateToProps(state) {
  return {
    number: state.counter,
    isLoading: state.loading.models.counter,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onDecrease: () => {
      dispatch({
        type: 'counter/decrease',
      });
    },
    onIncrease: () => {
      dispatch({
        type: 'counter/increase',
      });
    },
    onAdd(n) {
      dispatch({
        type: 'counter/add',
        payload: n,
      });
    },
    onAsyncDecrease: () => {
      dispatch({
        type: 'counter/asyncDecrease',
      });
    },
    onAsyncIncrease: () => {
      dispatch({
        type: 'counter/asyncIncrease',
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
