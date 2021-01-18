import { actionTypes } from '../../action/student/searchCondition';

const initialState = {
  key: '',
  sex: -1,
  page: 1,
  limit: 10,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.change:
      return { ...state, ...payload };
    default:
      return state;
  }
};
