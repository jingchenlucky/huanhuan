import {
  takeEvery,
  delay,
  put,
  fork,
  take,
  cancel,
  takeLatest,
} from 'redux-saga/effects';
import { actionTypes, increase, decrease } from '../action/count';

let stop = false;
function* autoIncrease() {
  stop = false;
  while (true) {
    yield delay(2000);
    if (stop) {
      break;
    }
    yield put(increase());
  }
}
function stopAutoIncrease() {
  console.log("停止111111")
  stop = true;
}
export default function*() {
  yield takeLatest(actionTypes.autoIncrease, autoIncrease);
  yield takeLatest(actionTypes.stopAutoIncrease, stopAutoIncrease);
}
//takeLatest指令 结束之前的进程 以最后一次为准
//停止的第一种模式，利用stop变量
//多次触发autoIncrease  然后触发stopAutoIncrease