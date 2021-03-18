import routeConifg from './routeConifg';
import dva from 'dva';
import counterModel from './models/counter';
import studentsModel from './models/students';
import { createBrowserHistory } from 'history';

// const logger = store => next => action => {
//   console.log('老状态', store.getState());
//   next(action);
//   console.log('新状态', store.getState());
//   console.log('');
// };
//得到一个dva对象
//这里传入的history才是在仓库counter中监听的histoy
const app = dva({
  history: createBrowserHistory(),
  initialState: {
    counter: 123,
  },
  // onError(err, dispatch) {
  //   console.log('抛出错误信息', err.message, dispatch);
  // },
  // onAction: logger,//触发action的时候调用，
  // onStateChange(state) {//当状态发生变化的时候触发
  //   console.log(state.counter);
  // },
  // onReducer(reducer) {
  //   return function(state, action) {
  //     console.log('reducer即将开始');
  //     const newState = reducer(state, action);
  //     console.log('reducer执行结束');
  //     return newState;
  //   };
  // },
  onEffect(oldEffect, sagaEffects, model, actionType) {
    return function*(action) {
      console.log('即将执行副作用代码');
      yield oldEffect(action);
      console.log('已经执行副作用代码');
    };
  },
  // extraReducers: {
  //   abc(state = 123, action) {
  //     return state;
  //   },
  //   bcd(state = 456, action) {
  //     return state;
  //   },
  // },
  // extraEnhancers: [function(createStore) {
  //   return function(...args){
  //     console.log('即将创建仓库')
  //     return createStore(...args)
  //   }
  // }],
});
//在启动之前定义模型
app.model(counterModel);
app.model(studentsModel);

//设置根路由，即启动后，要运行的函数，函数的返回结果会被渲染
app.router(routeConifg);
app.start('#root');
// ReactDOM.render(<App />, document.getElementById('root'));
