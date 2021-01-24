import { isPlainObject, isString } from 'lodash';
import isPromise from 'is-promise';

export default ({ dispatch }) => next => action => {
  if (!isFSA(action)) {
    //如果不是一个标准的action，=>promise
    //如果action是一个promise,则将其resolve的值dispatch否则不做任何处理，交给下一个中间件
   return isPromise(action) ? action.then(ac => dispatch(ac)) : next(action);
  }
  return isPromise(action.payload)
    ? action.payload
        .then(payload => dispatch({ ...action, payload }))
        .catch(error => dispatch({ ...action, payload: error, error: true }))
    : next(action);
};

/**
 * 判断action是不是一个标准的flux action
 * @param {} action
 */
function isFSA(action) {
  //action必须是一个平面对象
  //action.type必须是一个字符串
  //action的属性不能包含其他非标准属性 ['type','payload','error','meta]
  return (
    isPlainObject(action) &&
    isString(action.type) &&
    Object.keys(action).every(
      it => ['type', 'pay;oad', 'error', 'meta'].indexOf(it) > -1,
    )
  );
}
