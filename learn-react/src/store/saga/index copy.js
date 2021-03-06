import { take } from 'redux-saga/effects';
import { actionTypes } from '../action/count';
/**
 * saga任务 生成器函数
 */
export default function*() {
  //   console.log('saga启动了');
  //   let result = yield 22; //这里处理过了，将上次迭代数据作为参数传递给next，所以下面才打印了22
  //   console.log('拿到数据', result);
  while(true){
    const action = yield take(actionTypes.asyncIncrease);//{value:指令对象,done:false}  saga会接受到该指令对象在这里监听increase类型action,因此会发生阻塞
    console.log('发生了异步的increase', action);
  }
}

//该例子在chrome,直接用asyncIncrease()来触发  test.js有定义
