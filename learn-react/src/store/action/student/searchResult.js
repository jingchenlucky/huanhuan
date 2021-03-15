export const actionTypes = {
  //设置学生查询结果数组和总数
  setStudentsAndTotal: 'SET_STUDENTS_AND_TOTAL',
  setIsLoading: 'SET_IS_LOADING',
  fetchStudents: 'FETCH_STUDENTS',
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
export function fetchStudents() {
  return {
    type: actionTypes.fetchStudents,
  };
}
