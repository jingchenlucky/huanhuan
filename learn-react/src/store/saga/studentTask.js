import { takeEvery, put, select, cps } from 'redux-saga/effects';
import {
  actionTypes,
  setIsLoading,
  setStudentsAndTotal,
} from '../action/student/searchResult';
// import { searchStudents } from '../../services/student';
function mockStudents(condition, callBack) {
  console.log('mockStudents参数', condition);
  setTimeout(() => {
    if (Math.random() > 0.5) {
      callBack(null, {
        cont: 78,
        datas: [
          { id: 1, name: 'aaa' },
          { id: 2, name: 'bbb' },
        ],
      });
    } else {
      callBack(new Error('出错了！！！'), null);
    }
  }, 1000);
}

function* fetchStudents() {
  console.log('异步fetchStudents被触发');
  //设置为加载中
  yield put(setIsLoading(true));
  const condition = yield select(state => state.students.condition);
  try {
    let result = yield cps(mockStudents, condition);
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
