// 用于创建仓库并导出
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import promise from 'redux-promise';

const store = createStore(reducer, applyMiddleware(promise, logger));
export default store;
