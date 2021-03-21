import React from 'react';
import { connect } from 'dva';
import styles from './Counter.css';
import buttonStyles from '@/assets/css/button.css';

// console.log('++++++', styles);

function Counter(props) {
  return (
    <div className={styles.counterBox}>
      <div className={styles.title}>{props.number}</div>
      <button className={buttonStyles.button} onClick={props.onIncrease}>加1</button>
      <button className={buttonStyles.button} onClick={props.onDecrease}>减1</button>
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
