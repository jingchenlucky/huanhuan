//用于创建一个唯一的reducer
import { combineReducers } from 'redux';
import students from './student';
import count from './count';

export default combineReducers({ students, count });
