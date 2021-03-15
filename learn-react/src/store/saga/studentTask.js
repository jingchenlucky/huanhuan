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
  const condition = yield select(state => state.students.condition);
  try {
    let result = yield call(searchStudents, condition);
    yield put(setStudentsAndTotal(result.datas, result.cont));
  } catch (err) {
    console.log('errrrr', err);
  } finally {
    yield put(setIsLoading(false));
  }
}
export default function*() {
  yield takeEvery(actionTypes.fetchStudents, fetchStudents);
  console.log('正在监听学生的fetchStudents...');
}
