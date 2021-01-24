import { searchStudents } from '../../../services/student';
export const actionTypes = {
  //设置学生查询结果数组和总数
  setStudentsAndTotal: 'setStudentsAndTotal',
  setIsLoading: Symbol('setIsLoading'),
};

/**
 * 得到一个设置学生数组和总数的action
 * @param {*} arr
 * @param {*} total
 */
export function setStudentsAndTotal(arr, total) {
  return {
    type: actionTypes.setStudentsAndTotal,
    payload: {
      datas: arr,
      total,
    },
  };
}
/**
 * 得到一个是否正在加载的action
 * @param {}} isLoading
 */
export function setIsLoading(isLoading) {
  return {
    type: actionTypes.setIsLoading,
    payload: isLoading,
  };
}

/**
 * 使用redux-thunk,允许action是一个异步函数，如果是函数直接执行，不分发
 */
// export function fetchStudents() {
//   return async function(dispatch, getState) {
//     dispatch(setIsLoading(true));
//     const condition = getState().students.condition;
//     const resp = await searchStudents(condition);
//     // console.log(resp);
//     dispatch(setStudentsAndTotal(resp.datas, resp.cont));
//     dispatch(setIsLoading(false));
//   };
// }

/** 方式1:
 * 由于使用了redux-promise，则允许action是一个promise,在promise中触发action，使用resolve
 */
// export function fetchStudents() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       const action = setStudentsAndTotal(
//         [
//           { name: 'a', sex: 0 },
//           { name: 'b', sex: 1 },
//         ],
//         2,
//       );
//       resolve(action);
//     }, 3000);
//   });
// }

// /**
//  * 方式2:
//  * async函数本身返回的就是promise
//  * @param {} condition
//  */
// export async function fetchStudents(condition) {
//   const resp = await searchStudents(condition);
//   return setStudentsAndTotal(resp); //返回的是resolve,相当于触发action
// }

/**
 * 将promise resolve的结果作为payload
 * @param {*} condition
 */
export async function fetchStudents(condition) {
  return {
    type: actionTypes.setStudentsAndTotal,
    payload: searchStudents(condition).then(resp => ({
      datas: resp.datas,
      total: resp.cont,
    })),
  };
}
