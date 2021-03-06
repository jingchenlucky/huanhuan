import { actionTypes } from '../../action/count';

export default (state = 10, { type }) => {
  switch (type) {
    case actionTypes.increase:
      return state + 1;
    case actionTypes.decrease:
      return state - 1;
    default:
      return state;
  }
};
