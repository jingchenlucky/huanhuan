import {setStudentsAndTotal,setIsLoading} from '../../action/student/searchResult';
const initialState = {
  datas: [],
  total: 0,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  //   return state;
  switch (type) {
    case actionTypes.setStudentsAndTotal:
      return { ...state, ...payload };
    case actionTypes.setIsLoading:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};
