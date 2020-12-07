import * as usersAction from '../action/usersAction';
// import { v4 as uuidv4 } from 'uuid';

const initialState = {
  isLoading: false,
  datas: [],
};

export default (state = initialState, { type, payload }) => {
  // debugger
  switch (type) {
    case usersAction.ADDUSER:
      return {
        ...state,
        datas: [...state.datas, payload],
      };
    case usersAction.DELUSER:
      // debugger
      // state.filter(it => it.id !== payload);
      return {
        ...state,
        datas: state.datas.filter(it => it.id !== payload),
      };
    case usersAction.UPDATEUSER:
      return {
        ...state,
        datas: state.datas.map(it =>
          it.id === payload.id ? { ...it, ...payload } : it,
        ),
      };
    case usersAction.SETUSERS:
      return {
        ...state,
        datas: payload,
      };
    case usersAction.SETLOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
