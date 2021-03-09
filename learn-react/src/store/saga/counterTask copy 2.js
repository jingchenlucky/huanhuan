import { takeEvery, delay, put, fork, take, cancel } from 'redux-saga/effects';
import { actionTypes, increase, decrease } from '../action/count';

//takeEvery实现原理
// function takeEvery(type, saga) {
//   return fork(function*() {//开启一个新的任务，新的线程
//     while (true) {
//       yield take(type);
//       fork(saga);//监听到了就开启一个新的任务，执行autoIncreaseFunc,若多次触发autoIncrease(),这里就会新开出多个线程，从而自动增加的速度会越来越快。若想改变这种现象，需要以最后一次为准，结束上一个兄弟进程
//     }
//   });
// }
function* autoIncreaseFunc() {
  while (true) {
    yield delay(2000);
    yield put(increase());
  }
}

export default function*() {
  yield takeEvery(actionTypes.autoIncrease, autoIncreaseFunc);
  console.log('正在监听autoIncrease'); //
}
//若多次触发autoIncrease(),这里就会新开出多个线程，从而自动增加的速度会越来越快。若想改变这种现象，需要以最后一次为准，结束上一个兄弟进程
