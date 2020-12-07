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
    return async function (dispatch) {
        dispatch(createSetLoadingAction(true)); //正在加载
        const users = await getAllStudents();
        const action = createSetUsersAction(users)
        dispatch(action)
        dispatch(createSetLoadingAction(false))
    }
}
