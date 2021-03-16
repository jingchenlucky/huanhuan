//用于创建一个唯一的reducer
import { combineReducers } from 'redux';
import students from './student';
import count from './count';
import { connectRouter } from 'connected-react-router';
import history from '../history'

export default combineReducers({
  students,
  count,
  router: connectRouter(history),
});
