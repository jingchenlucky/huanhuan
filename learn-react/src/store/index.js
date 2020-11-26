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

// function logger1(store) {
//   return function (nextDispatch) {
//     //下面返回的函数，是最终要应用的dispatch函数
//     return function (action) {
//       console.log("中间件1111");
//       console.log("旧数据", store.getState());
//       console.log("action", action);
//       nextDispatch(action);
//       console.log("新数据", store.getState());
//       console.log("");
//     };
//   };
// }
// const store = createStore(reducer,10);
//应用中间件，方式1:
// const store = createStore(reducer, applyMiddleware(logger1, logger2));
//方式2:
// applyMiddleware(logger1, logger2)(createStore)(reducer); 最终创建仓库
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
