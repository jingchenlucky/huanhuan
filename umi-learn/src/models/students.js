import { searchStudents } from '../services/student';
import { routerRedux } from 'dva/router';
export default {
  state: {
    condition: {
      key: '',
      sex: -1,
      page: 1,
      limit: 10,
    },
    result: {
      total: 0,
      datas: [],
    },
  },
  reducers: {
    changeCondition(state, action) {
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
    //仓库改变->地址栏
    *setCondition(action, { put, select }) {
      //   yield put({
      //     type: 'changeCondition',
      //     payload: action.payload,
      //   });
      let condition = yield select(state => state.students.condition);
      condition = { ...condition, ...action.payload };
      yield put(
        routerRedux.push(
          `?page=${condition.page}&limit=${condition.limit}&key=${condition.key}&sex=${condition.sex}`,
        ),
      );
    },
    *fetchStudents(action, { put, select, call }) {
      const condition = yield select(state => state.students.condition);
      const result = yield call(searchStudents, condition);

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
    // initStudents({ dispatch }) {
    //   dispatch({
    //     type: 'fetchStudents',
    //   });
    // },

    //地址改变->仓库
    listenUrl({ history, dispatch }) {
      history.listen(newLocation => {
        if (newLocation.pathname !== '/student') {
          return;
        }
        const query = newLocation.query;
        query.limit && (query.limit = +query.limit)
        query.page && (query.page = +query.page)
        query.sex && (query.sex = +query.sex)
        dispatch({
          type: 'changeCondition',
          payload: query,
        });
        dispatch({
          type: 'fetchStudents',
        });
      });
    },
  },
};
