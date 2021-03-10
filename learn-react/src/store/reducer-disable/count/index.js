import { increase, decrease, add,asyncIncrease } from '../../action/count';
import { handleActions } from 'redux-actions';
// 多个action类型的reducer处理，
// const reducer = handleActions(
//   {
//     INCREASE: state => state + 1,//属性也可以写为action创建函数
//     DECREASE: state => state - 1,
//     ADD: (state, action) => state + action.payload,
//   },
//   5,
// );

////属性也可以写为action创建函数
const reducer = handleActions(
  {
    [increase]: state => state + 1, //属性也可以写为action创建函数,用属性表达式
    [decrease]: state => state - 1,
    [add]: (state, action) => state + action.payload,
  },
  5,
);
window.increaseCreator=asyncIncrease;
export default reducer;
// export default (state = 10, { type, payload }) => {
//   switch (type) {
//     case actionTypes.increase:
//       return state + 1;
//     case actionTypes.decrease:
//       return state - 1;
//     case actionTypes.add:
//       return state + payload;
//     default:
//       return state;
//   }
// };
