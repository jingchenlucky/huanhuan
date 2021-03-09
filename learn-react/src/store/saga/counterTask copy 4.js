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

//takeEvery实现原理
// function takeEvery(type, saga) {
//   return fork(function*() {
//     while (true) {
//       yield take(type);
//       fork(saga);//监听到了就开启一个新的任务，执行autoIncreaseFunc
//     }
//   });
// }
function* autoIncrease() {
  while (true) {
    yield delay(2000);
    yield put(increase());
  }
}

export default function*() {
  yield takeLatest(actionTypes.autoIncrease, autoIncrease);
  console.log('正在监听autoIncrease'); //
}
//takeLatest指令 结束之前的进程 以最后一次为准