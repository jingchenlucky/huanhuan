import ActionTypes from "./utils/actionTypes"
import isPlainObject from './utils/isPlainObject'
/**
 * 实现createStore功能
 * @param {func} reducer
 * @param {*} defaultState  默认状态
 */
export default function (reducer, defaultState) {
  let currentReducer = reducer,
    currentState = defaultState;
  const listeners = []; //定义一个监听器数组；
  //创建仓库时，需要分发一次初始的action
  dispatch({ type: ActionTypes.INIT()});
  function dispatch(action) {
    if (!isPlainObject(action)) {
      //验证action必须是一个平面对象
      throw new TypeError("action must be plain-object");
    }
    if (action.type === undefined) {
      //验证action必须有type属性
      throw new TypeError("action must have type property");
    }
    currentState = currentReducer(currentState, action); //reducer之后拿到新的状态
    //运行所有监听器（订阅者）
    for (let listener of listeners) {
      listener();
    }
  }
  function getState() {
    return currentState;
  }
  /**
   * 添加一个监听器
   */
  function subscribe(listener) {
    listeners.push(listener);
    let isRemove = false;
    return function () {//返回取消监听的函数
      if (isRemove) {
        return;
      }
      const index = listeners.indexOf(listener);
      listeners.splice(index);
      isRemove = true;
    };
  }
  return { dispatch, getState, subscribe };
}
