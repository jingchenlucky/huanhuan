import { takeEvery, delay, put } from 'redux-saga/effects';
import { actionTypes, increase, decrease } from '../action/count';

function* asyncIncrease() {
  yield delay(2000);
  console.log('触发了异步asyncIncrease');
  yield put(increase());
}
// saga监听到asyncIncrease的action之后，隔了2s，触发increase的action，重新分发，从头开始，
// 由于saga中间件监控不到increase，继续往下分发。saga中间件不会拦截分发。在thunk中，若action是一个带有副作用的函数，被分发时，thunk会阻止action向后移交。
//结合笔记里的图来理解
function* asyncDecrease() {
  yield delay(2000);
  console.log('触发了异步asyncDecrease');
  yield put(decrease());
}

export default function*() {
  yield takeEvery(actionTypes.asyncIncrease, asyncIncrease);
  yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
  console.log('正在监听asyncIncrease、asyncDecrease');
}
