import { createAction } from 'redux-actions';
export const actionTypes = {
  increase: 'INCREASE',
  decrease: 'DECREASE',
  asyncIncrease: 'ASYNC_INCREASE',
  asyncDecrease: 'ASYNC_DECREASE',
  autoIncrease: 'AUTO_INCREASE',
  stopAutoIncrease: 'STOP_AUTO_INCREASE',
  add: 'ADD',
};
//手写createAction
// function createAction(type, payloadCreator) {
//   return function actionCreator(...args) {
//     if (typeof payloadCreator === 'function') {
//       const payload = payloadCreator(...args);
//       return {
//         type,
//         payload,
//       };
//     } else {
//       return { type };
//     }
//   };
// }
//无payload
export const increase = createAction(actionTypes.increase);
export const decrease = createAction(actionTypes.decrease);
export const asyncIncrease = createAction(actionTypes.asyncIncrease);
export const asyncDecrease = createAction(actionTypes.asyncDecrease);
export const autoIncrease = createAction(actionTypes.autoIncrease);
export const stopAutoIncrease = createAction(actionTypes.stopAutoIncrease);
// 有payload
export const add = createAction(actionTypes.add, number => number);
// export function add(n) {
//   return {
//     type: actionTypes.add,
//     payload: n,
//   };
// }
// export function increase() {
//   return { type: actionTypes.increase };
// }

// export function decrease() {
//   return { type: actionTypes.decrease };
// }
// export function asyncIncrease() {
//   return { type: actionTypes.asyncIncrease };
// }

// export function asyncDecrease() {
//   return { type: actionTypes.asyncDecrease };
// }
// export function autoIncrease() {
//   return { type: actionTypes.autoIncrease };
// }
// export function stopAutoIncrease() {
//   return {
//     type: actionTypes.stopAutoIncrease,
//   };
// }
