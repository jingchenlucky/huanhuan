import * as usersAction from "../action/usersAction";
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  { id: uuidv4(), name: "用户1", age: 11 },
  { id: uuidv4(), name: "用户2", age: 12 },
];

export default (state = initialState, { type, payload }) => {
    // console.log("users22222",state,type,payload);
  switch (type) {
    case usersAction.ADDUSER:
      return [...state, payload];
    case usersAction.DELUSER:
      return state.filter((it) => it.id !== payload.id);
    case usersAction.UPDATEUSER:
      return state.map((it) =>
        it.id === payload.id ? { ...it, ...payload } : it
      );
    default:
      return state;
  }
};
