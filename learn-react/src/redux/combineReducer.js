import isPlainObject from "./utils/isPlainObject";
import actionTypes from "./utils/actionTypes";
/**
 * 判断reducers对象是否合理
 * @param {} reducers
 */
function isValidate(reducers) {
  if (typeof reducers !== "object") {
    throw new TypeError("reducers must be an object");
  }
  if (!isPlainObject(reducers)) {
    throw new TypeError("reducers must be a plain object");
  }
  //验证reducer返回的结果是不是undefined
  for (const key in reducers) {
    if (reducers.hasOwnProperty(key)) {
      const reducer = reducers[key]; //拿到reducer函数
      let state = reducer(undefined, { type: actionTypes.INIT() }); //传递一个特殊的type值
      if (state === undefined) {
        throw new TypeError("reducers must not a return undefined");
      }
      state = reducer(undefined, { type: actionTypes.UNKNOWN() });
      if (state === undefined) {
        throw new TypeError("reducers must not a return undefined");
      }
    }
  }
}
export default function (reducers) {
    //1验证
  isValidate(reducers);
  //返回的是reducer函数，函数返回新的状态
  return (state = {}, action) => {
    let newState = {};
    for (const key in reducers) {
        if (reducers.hasOwnProperty(key)) {
            const reducer = reducers[key];
            newState[key]=reducer(state[key],action)
        }
    }
    return newState;
  };
}
