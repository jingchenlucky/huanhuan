import { takeEvery, delay, put } from 'redux-saga/effects';
import { actionTypes, increase, decrease } from '../action/count';

function* asyncIncrease() {
  yield delay(2000);
  console.log('触发了异步asyncIncrease');
  yield put(increase());
}

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
