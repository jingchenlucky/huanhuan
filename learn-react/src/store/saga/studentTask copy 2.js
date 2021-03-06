import { takeEvery, put, call, select } from 'redux-saga/effects';
import {
  actionTypes,
  setIsLoading,
  setStudentsAndTotal,
} from '../action/student/searchResult';
import { searchStudents } from '../../services/student';

function* fetchStudents() {
  console.log('异步fetchStudents被触发');
  //设置为加载中
  yield put(setIsLoading(true));
  // const state = yield select(); //拿到所有的state
  //拿到经过 state.students.condition筛选的state
  const condition = yield select(state => state.students.condition);
  console.log('通过select拿到仓库中数据', condition);
  //调用副作用-方式1 yield后面跟promise对象，不推荐，yield最好统一使用指令
  //   let result = yield searchStudents();
  //调用副作用-方式2 使saga的call指令 call(searchStudents，参数1，参数2.。。);
  let result = yield call(searchStudents, condition);
  //  let result = yield apply(null,searchStudents,[]);
  console.log('学生数据', result);
  yield put(setStudentsAndTotal(result.datas, result.cont));
  yield put(setIsLoading(false));
}
export default function*() {
  yield takeEvery(actionTypes.fetchStudents, fetchStudents);
  console.log('正在监听学生的fetchStudents...');
}
