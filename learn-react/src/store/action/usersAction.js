import { getAllStudents } from '../../services/student';

export const ADDUSER = Symbol('add-user');
export const DELUSER = Symbol('del-user');
export const UPDATEUSER = Symbol('update-user');
export const SETUSERS = Symbol('set-users');
export const SETLOADING = Symbol('set-loading');

export const createAddUserAction = user => ({
  type: ADDUSER,
  payload: user,
});
export const deleteUserAction = id => ({
  type: DELUSER,
  payload: id,
});
export const UpdateUserAction = (id, newUserData) => ({
  type: UPDATEUSER,
  payload: {
    ...newUserData,
    id,
  },
});
export const createSetUsersAction = users => ({
  type: SETUSERS,
  payload: users,
});
/*
 * 返回一个设置加载状态的action
 * @param {f} isLoading
 */
export const createSetLoadingAction = isLoading => ({
  type: SETLOADING,
  payload: isLoading, //是否加载
});

export function fetchUsers() {
  //由于thunk的存在，允许action是一个带有副作用的函数
  //发现是有副作用函数，thunk 会阻止 action 继续向后移交，直接调用，logger的action不接受函数。日志中间件的打印，是因为直接调用异步函数时候，
  //又触发了 dispatch(createSetLoadingAction(true)，此时的action是一个对象，thunk向后传递，logger中间件打印
  return async function(dispatch, getState) {
    dispatch(createSetLoadingAction(true)); //正在加载
    console.log(getState());
    // getAllStudents().then(resp => {
    //     const action = createSetUsersAction(resp);
    //     dispatch(action);
    //     dispatch(createSetLoadingAction(false));
    //   });
    const users = await getAllStudents();
    const action = createSetUsersAction(users);
    dispatch(action);
    dispatch(createSetLoadingAction(false));
  };
}
