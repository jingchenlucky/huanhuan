import { actionTypes } from '../../action/count';
import { handleAction } from 'redux-actions';
//单个action类型的reducer处理
// export default (state = 10, { type, payload }) => {
//   switch (type) {
//     case actionTypes.increase:
//       return state + 1;
//     default:
//       return state;
//   }
// };
const reducer = handleAction(
  'INCREASE',
  (state, action) => {
    return state + 1;
  },
  10,
);
export default reducer;