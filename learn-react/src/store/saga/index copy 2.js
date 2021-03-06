import { all } from 'redux-saga/effects';
// import { actionTypes } from '../action/count';
import counterTask from './counterTask';
import studentTask from './studentTask';
/**
 * saga任务 生成器函数
 */
export default function*() {
  yield all([counterTask(),studentTask()])
  console.log("全部结束")
}
