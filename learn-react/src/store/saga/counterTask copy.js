import { takeEvery, delay, put, fork, take, cancel } from 'redux-saga/effects';
import { actionTypes, increase, decrease } from '../action/count';

function* asyncIncrease() {
  //takeEvery就是利用fork来实现的
  //案例1，连续触发3次只以第一次为准
  // //这种写法若2S内连续触发3次asyncIncrease(),只以第一次为准。在delay期间，监听不到下一次的asyncIncrease事件
  // while (true) {
  //   yield take(actionTypes.asyncIncrease);
  //   yield delay(2000);//
  //   yield put(increase());
  // }

  // 案例2 连续触发 3次都可以
  // while (true) {
  //   yield take(actionTypes.asyncIncrease);
  //   yield fork(function*() {
  //     //fork另开了一个新线程去delay阻塞，所以连续触发3次asyncIncrease()，均能正常监听，最后触发3次increase
  //     yield delay(2000);
  //     yield put(increase());
  //   });
  // }

  // 案例3 以最后一次为准
  let task;
  while (true) {
    yield take(actionTypes.asyncIncrease);
    //监听到了action,并且在开启新任务之前，取消之前的任务
    if (task) {
      //如果之前有任务
      yield cancel(task);
      console.log('之前的任务被取消了');
    }
    task = yield fork(function*() {
      //fork开启了新的任务，并且返回了一个任务对象
      yield delay(2000);
      yield put(increase());
    });
  }
}

function* asyncDecrease() {
  yield delay(2000);
  console.log('触发了异步asyncDecrease');
  yield put(decrease());
}

export default function*() {
  yield fork(asyncIncrease);//这里使用yield take(actionTypes.asyncIncrease);会阻塞进程， yield指令不会，会另开一个进程
  yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
  console.log('正在监听asyncIncrease、asyncDecrease'); //
}
