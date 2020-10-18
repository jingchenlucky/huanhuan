// import * as actionType from "../action/action-type";
// //假设仓库中存放了一个数组，该数组可能是+1/-1
// //约定action格式:{type:'操作类型'，payload:附加数据}

// /**
//  * reducer本身是一个普通函数，
//  * @param state 之前仓库中的状态（数据）
//  * @param action  描述要做什么的对象
//  * @returns {number|*}
//  */
// export function reducer(state = 20, action) {
//     console.log("reducer运行了", state, action);
//     switch (action.type) {
//         case actionType.INCREASE:
//             return state + 1;
//         case actionType.DECREASE:
//             return state - 1;
//         case actionType.SET:
//             return action.payload
//         default:
//             return state;//如果是一个无效的操作，数据不变
//     }
// }

import loginUser from "./loginUser";
import user from "./user";

export default (state = {}, action) => {
    console.log("redcure总",state,action);
  const newState = {
    loginUser: loginUser(state.loginUser, action),
    users: user(state.user, action),
  };
  return newState;
};