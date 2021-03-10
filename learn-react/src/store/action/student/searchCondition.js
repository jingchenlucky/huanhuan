import { createAction, handleAction } from 'redux-actions';
// export const actionTypes = {
//   change: 'CHANGE',
// };

// export function change(newCondition) {
//   return {
//     type: actionTypes.change,
//     payload: newCondition,
//   };
// }
export const change = createAction(('CHANGE', newCondition => newCondition));
export default handleAction(
  'CHANGE',
  (state, action) => {
    return { ...state, ...action.payload };
  },
  {
    key: '',
    sex: -1,
    page: 1,
    limit: 10,
  },
);
