import { searchStudents } from '../services/student';
export default {
  state: {
    condition: {
      key: '',
      sex: -1,
      page: 1,
      limit: 10,
    },
    result: {
      total:0,
      datas: [],
    },
  },
  reducers: {
    setCondition(state, action) {
      return {
        ...state,
        condition: { ...state.condition, ...action.payload },
      };
    },
    setResult(state, action) {
      return {
        ...state,
        result: { ...state.result, ...action.payload },
      };
    },
  },
  effects: {
    *fetchStudents(action, { put, select ,call}) {
      const condition = yield select(state => state.students.condition);
      const result = yield call(searchStudents,condition);
      
      yield put({
        type: 'setResult',
        payload: {
          total: result.cont,
          datas: result.datas,
        },
      });
    },
  },
  subscriptions: {
    //刚开始 请求一次学生数据
    initStudents({ dispatch }) {
      dispatch({
        type: 'fetchStudents',
      });
    },
  },
};
