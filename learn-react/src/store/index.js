// import { createStore, bindActionCreators } from "redux";
import { createStore, bindActionCreators } from "../redux";
import reducer from "./reducer";
import { createAddUserAction, deleteUserAction } from "./action/usersAction";

// const store = createStore(reducer,10);
const store = createStore(reducer);
console.log("仓库store", store);

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
