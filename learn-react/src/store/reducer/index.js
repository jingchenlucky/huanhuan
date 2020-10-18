import loginUser from "./loginUser";
import user from "./user";
// import {combineReducers} from 'redux';

//手动合并redux
export default (state = {}, action) => {
    console.log("redcure总",state,action);
  const newState = {
    loginUser: loginUser(state.loginUser, action),
    users: user(state.user, action),
  };
  return newState;
};

//redux提供combineReducers方法合并redux
// export default combineReducers({
//   loginUser,
//   user
// })