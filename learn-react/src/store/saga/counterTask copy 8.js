import {
  takeEvery,
  delay,
  put,
  fork,
  take,
  cancel,
  cancelled,
  takeLatest,
} from 'redux-saga/effects';
import { actionTypes, increase, decrease } from '../action/count';

function* autoTask() {
  while (true) {
    yield take(actionTypes.autoIncrease); //只监听autoIncrease
    const task = yield fork(function*() {
      try {
        while (true) {
          yield delay(2000);
          yield put(increase());
        }
      } finally {//如果任务结束，整个函数都不执行了。但是finall一定会被执行
        if (yield cancelled()) {
          console.log("任务被取消掉了")
        }
      }
    });
    yield take(actionTypes.stopAutoIncrease); //转而只监听stopAutoIncrease
    yield cancel(task);
  }
}
export default function*() {
  yield fork(autoTask);
  console.log("监听autoTask。。。。");
}
//cancelled
