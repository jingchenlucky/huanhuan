import { createStore, bindActionCreators, applyMiddleware } from "../redux";
// import { createStore, bindActionCreators } from "../redux";
import reducer from "./reducer";
import { createAddUserAction, deleteUserAction } from "./action/usersAction";
import logger from 'redux-logger';
// import {createLogger} from 'redux-logger';

// const logger = createLogger({
//   // predicate:function(){
//   //   console.log("函数被调用了")
//   // },
//   collapsed:true,
//   duration:true
// });
const store = applyMiddleware(logger)(createStore)(reducer);
store.subscribe(() => {
  console.log("状态发生改变了11,在分发过action之后运行", store.getState());
});
// store.dispatch(
//   createAddUserAction({
//     id: 3,
//     name: "用户3333",
//     age: 8,
//   })
// );
// store.dispatch(deleteUserAction(3));
const actionCreators = {
  addUser: createAddUserAction,
  deleteUser: deleteUserAction,
};
const actions = bindActionCreators(actionCreators, store.dispatch);
actions.addUser({ id: 3, name: "用户3333", age: 8 });
actions.deleteUser(3);
