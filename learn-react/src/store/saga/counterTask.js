import { actionTypes } from '../action/count';
import { take } from 'redux-saga/effects';

export default function*() {
  while (true) {
    let action = yield take(actionTypes.asyncIncrease);
    console.log('异步increase启动了', action);
  }
}
