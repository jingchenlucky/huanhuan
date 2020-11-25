import { createStore, bindActionCreators, applyMiddleware } from "../redux";
// import { createStore, bindActionCreators } from "../redux";
import reducer from "./reducer";
import { createAddUserAction, deleteUserAction } from "./action/usersAction";

/**
 * 中间件函数1
 */
const logger1 = (store) => (nextDispatch) => (action) => {
  console.log("中间件1111");
  console.log("旧数据", store.getState());
  console.log("action", action);
  nextDispatch(action);
  console.log("新数据", store.getState());
  console.log("");
};
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
function logger2(store) {
  //返回dispatch 创建函数
  return function (nextDispatch) {
    //下面返回的函数，是最终要应用的dispatch函数
    return function (action) {
      console.log("中间件222");
      console.log("旧数据", store.getState());
      console.log("action", action);
      nextDispatch(action);
      console.log("新数据", store.getState());
      console.log("");
    };
  };
}
// const store = createStore(reducer,10);
//应用中间件，方式1:
// const store = createStore(reducer, applyMiddleware(logger1, logger2));
//方式2:
//applyMiddleware(logger1, logger2) 记录中间件，返回一个函数
//applyMiddleware(logger1, logger2)(createStore) 创建仓库方式，也返回一个函数 
// applyMiddleware(logger1, logger2)(createStore)(reducer); 最终创建仓库
const store = applyMiddleware(logger1, logger2)(createStore)(reducer);
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
