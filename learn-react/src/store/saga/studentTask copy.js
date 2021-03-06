import { takeEvery, put } from 'redux-saga/effects';
import { actionTypes, setIsLoading } from '../action/student/searchResult';
import { searchStudents } from '../../services/student';

function mockStudents() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('成功获取');
      } else {
        reject('失败了！！！');
      }
    }, 2000);
  });
}
function* fetchStudents() {
  console.log('异步fetchStudents被触发');
  //设置为加载中
  yield put(setIsLoading(true));
  //当saga发现得到的结果是一个Promise对象，它会自动等待该promise对象晚场
  //完成后，会把得到的结果作为值传递给下一次next
  //如果promise对象被拒绝，saga会使用generator.throw跑出一个错误
  try {
    let result = yield mockStudents();
    console.log('学生数据', result);
  } catch (err) {
      //err表示reject的内容
    console.log(err);
  }
}
export default function*() {
  yield takeEvery(actionTypes.fetchStudents, fetchStudents);
  console.log('正在监听学生的fetchStudents...');
}
