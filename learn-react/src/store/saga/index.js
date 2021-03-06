import { takeEvery } from 'redux-saga/effects';
import { actionTypes } from '../action/count';
function* asyncInc(){
    console.log("触发了asyncIncrease")
}
function* asyncDes(){
    console.log("出发了asyncDecrease")
}
/**
 * saga任务 生成器函数
 */
export default function*() {
  yield takeEvery(actionTypes.asyncIncrease,asyncInc)
  yield takeEvery(actionTypes.asyncDecrease,asyncDes)
  console.log("正在监听asyncIncrease/asyncDecrease")
}
