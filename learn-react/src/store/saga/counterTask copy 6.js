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

function* stopTask() {
  if (task) {
    yield cancel(task);
  }
}
let task;
function* autoIncrease() {
  while (true) {
    yield take(actionTypes.autoIncrease);
    yield* stopTask(); //执行另一个生成器里面执行  要用*
    task = yield fork(function*() {
      while (true) {
        yield delay(2000);
        yield put(increase());
      }
    });
  }
}
function* stopAutoIncrease() {
  yield* stopTask();
}
export default function*() {
  yield fork(autoIncrease);
  yield takeLatest(actionTypes.stopAutoIncrease, stopAutoIncrease);
}
//takeLatest指令 结束之前的进程 以最后一次为准
//停止的第二种模式，利用cancel(task)
//自己手写takeEvery方法  才能拿到第二次调用fork返回的task
//多次触发autoIncrease  然后触发stopAutoIncrease
