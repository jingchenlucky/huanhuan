// 用于创建仓库并导出
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import promise from '../redux-promise';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMid = createSagaMiddleware(); //创建一个saga的中间件

const store = createStore(reducer, applyMiddleware(sagaMid, logger));
console.log('++++++', store.getState());
sagaMid.run(rootSaga); //启动saga任务   生成器函数体执行收到外部生成器控制
export default store;
