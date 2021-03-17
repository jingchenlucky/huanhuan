export default {
  namespace: 'counter',
  state: 0,
  reducers: {
    increase(state, action) {
      return state + 1;
    },
    decrease(state, action) {
      return state - 1;
    },
    add(state, { type, payload }) {
      return state + payload;
    },
  },
  effects: {
    // yield takeEvery(actionTypes.asyncIncrease, asyncIncrease)
    //相当于saga 里监控到了asyncIncrease执行
    //     function* asyncIncrease() {
    //     yield delay(2000);
    //     yield put(increase())
    // }
    *asyncIncrease(action, { call, put }) {
      //第二个参数是各种令对象，进行解构，但没有delay，下面手动实现delay效果
      yield call(delay, 2000); //delay是一个promise，这里会等异步结束才会往下，所以有延迟效果，因为
      console.log('++asyncIncrease++++');
      yield put({
        type: 'increase', //在模型内部不需要加命名空间
      });
    },
    *asyncDecrease(action, { call, put }) {
      yield call(delay, 2000);
      console.log('+++asyncDecrease+++');
      yield put({
        type: 'decrease',
      });
    },
  },
  subscriptions: {
    //
    resizeIncrease(obj) {
      console.log('123', obj); //{history: {…}, dispatch: ƒ}
      //订阅窗口尺寸变化，每次变化让数字增加
      //在刚开始的时候，给window注册onresize事件，监听窗口尺寸变化
      window.onresize = () => {
        obj.dispatch({
          type: 'increase',
        });
      };
    },
    resizeDecrease({ dispatch, history }) {
      history.listen(() => {
        dispatch({
          type: 'decrease',
        });
      });
    },
  },
};
function delay(duration) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
