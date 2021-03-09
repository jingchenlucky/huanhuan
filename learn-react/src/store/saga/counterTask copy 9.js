import { call, race } from 'redux-saga/effects';
import { increase, decrease } from '../action/count';

function asyncAction() {
  //生成一个1000-500的随机毫秒数
  var duration = Math.floor(Math.random() * 2000 + 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(increase());
      } else {
        resolve(decrease());
      }
    }, duration);
  });
}
export default function*() {
  var result = yield race({
    action1:  call(asyncAction),
    action2:  call(asyncAction),
  });
}
//race 也可以用来解决  自动增加和停止的流程控制
