import { createActions, handleActions } from 'redux-actions';

// export const actionTypes = {
//   increase: 'INCREASE',
//   decrease: 'DECREASE',
//   asyncIncrease: 'ASYNC_INCREASE', //异步增加
//   asyncDecrease: 'ASYNC_DECREASE', //异步减少
//   autoIncrease: 'AUTO_INCREASE',
//   stopAutoIncrease: 'STOP_AUTO_INCREASE',
//   add: 'ADD',
// };
const actions = createActions({
  INCREASE: null,
  DECREASE: null,
  ASYNC_INCREASE: null,
  ASYNC_DECREASE: null,
  AUTO_INCREASE: null,
  STOP_AUTO_INCREASE: null,
  ADD: number => number,
});
export const {
  increase,//increase.toString 为INCREASE
  decrease,
  asyncIncrease,
  asyncDecrease,
  autoIncrease,
  stopAutoIncrease,
  add,
} = actions;
//actions:

/*
{
    increase: fn(),
    decrease: fn(),
    asyncIncrease: fn(),
    asyncDecrease: fn(),
    add: fn(number)
}

*/
export default handleActions(
  {
    [increase]: state => state + 1,
    [decrease]: state => state - 1,
    [add]: (state, action) => state + action.payload,
  },
  5,
);
