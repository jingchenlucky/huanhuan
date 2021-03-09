import { race, call, take, fork,delay,put } from 'redux-saga/effects';
import {
  actionTypes,
  increase,
  decrease,
  stopAutoIncrease,
} from '../action/count';
/**
 * 自动增加和停止的流程控制
 * 流程：自动增加 -> 停止 -> 自动增加 -> 停止
 */
function* autoTask() {
  while (true) {
    yield take(actionTypes.autoIncrease); //只监听autoIncrease
    yield race({
      autoIncrease: call(function*() {
        while (true) {
          yield delay(2000);
          yield put(increase());
        }
      }),
      calcel: take(actionTypes.stopAutoIncrease),
    });
  }
}
export default function*() {
  yield fork(autoTask);
}
//监听到autoIncrease，然后race同时开启两个任务，autoIncrease无限循环自动增加，calcel监听stopAutoIncrease，等待stopAutoIncrease。
//其中autoIncrease无限循环自动增加，永远不会结束。触发stopAutoIncrease首先结束该任务，并且结束掉autoIncrease任务。