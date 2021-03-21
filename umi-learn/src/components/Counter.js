import React from 'react';
import { connect } from 'dva';

function Counter(props) {
  return (
    <div>
      <div>{props.number}</div>
      <button onClick={props.onIncrease}>加1</button>
      <button onClick={props.onDecrease}>减1</button>
    </div>
  );
}
function mapStatesToProps(state) {
  return {
    number: state.counter,
  };
}
const mapDispatchToProps = dispatch => ({
  onIncrease() {
    dispatch({ type: 'counter/increase' });
  },
  onDecrease() {
    dispatch({ type: 'counter/decrease' });
  },
});
export default connect(mapStatesToProps, mapDispatchToProps)(Counter);
