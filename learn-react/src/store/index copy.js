// import { createStore, bindActionCreators } from "redux";
import { createStore, bindActionCreators } from "../redux";
import reducer from "./reducer";
import { createAddUserAction, deleteUserAction } from "./action/usersAction";

// const store = createStore(reducer,10);
const store = createStore(reducer);
console.log("仓库store", store);

//模拟redux中间件功能，拿到旧的dispatch函数，并且改写新功能
let oldDispatch=store.dispatch;//拿到旧dispatch函数
store.dispatch=function(action){
  console.log("中间件1111");
  console.log("旧数据",store.getState());
  console.log("action",action);
  oldDispatch(action);
  console.log("新数据",store.getState());
}

// //模拟redux中间件功能，拿到旧的dispatch函数，并且改写新功能
// oldDispatch=store.dispatch;//拿到中间件1的dispatch函数
// store.dispatch=function(action){
//   console.log("中间件2222");
//   console.log("旧数据",store.getState());
//   console.log("action",action);
//   oldDispatch(action);
//   console.log("新数据",store.getState());
// }

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
