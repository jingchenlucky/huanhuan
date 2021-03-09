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
/**
 * 自动增加和停止的流程控制
 * 流程：自动增加 -> 停止 -> 自动增加 -> 停止
 */
function* autoTask() {
  while (true) {
    yield take(actionTypes.autoIncrease);//只监听autoIncrease
    const task = yield fork(function*() {
      while (true) {
        yield delay(2000);
        yield put(increase());
      }
    });
    yield take(actionTypes.stopAutoIncrease);//转而只监听stopAutoIncrease
    yield cancel(task);
  }
}
export default function*() {
  yield fork(autoTask);
  console.log("正在监听autoIncrease。。。")
}
//停止的第二种方式 利用take的阻塞，当监听完autoIncrease之后，紧接着只监听stopAutoIncrease
//所以 就算多次触发autoIncrease  也没开启多个任务，因为autoIncrease只监听一次，就去监听stopAutoIncrease了
//任务调度流程在assets/2.jpg