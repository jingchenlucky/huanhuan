// export const actionTypes = {
//   //设置学生查询结果数组和总数
//   setStudentsAndTotal: 'setStudentsAndTotal',
//   setIsLoading: Symbol('setIsLoading'),
//   fetchStudents: Symbol('fetchStudents'),
// };

// /**
//  * 得到一个设置学生数组和总数的action
//  * @param {*} arr
//  * @param {*} total
//  */
// export function setStudentsAndTotal(arr, total) {
//   return {
//     type: actionTypes.setStudentsAndTotal,
//     payload: {
//       datas: arr,
//       total,
//     },
//   };
// }
// /**
//  * 得到一个是否正在加载的action
//  * @param {}} isLoading
//  */
// export function setIsLoading(isLoading) {
//   return {
//     type: actionTypes.setIsLoading,
//     payload: isLoading,
//   };
// }
// export function fetchStudents() {
//   return {
//     type: actionTypes.fetchStudents,
//   };
// }
import { createActions, handleActions } from 'redux-actions';
export const {setStudentsAndTotal,setIsLoading,fetchStudents} = createActions({
  SET_STUDENTS_AND_TOTAL: (arr, total) => ({
    datas: arr,
    total
}),
SET_IS_LOADING: isLoading => isLoading,
FETCH_STUDENTS: null
});
export default handleActions(
  {
    [setStudentsAndTotal]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [setIsLoading]: (state, action) => {
      return { ...state, isLoading: action.payload };
    },
  },
  {
    datas: [],
    total: 0,
    isLoading: false,
  },
);
