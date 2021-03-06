import store from './index';
// import { change } from './action/student/searchCondition';
import {
  increase,
  decrease,
  asyncIncrease,
  asyncDecrease,
} from './action/count/index';
import { fetchStudents } from './action/student/searchResult';
// store.dispatch(change({ key: '12313', page: 2 }));
// store.dispatch(increase());
window.decrease = function() {
  store.dispatch(decrease());
};

window.increase = function() {
  store.dispatch(increase());
};

window.asyncIncrease = function() {
  store.dispatch(asyncIncrease());
};
window.asyncIncrease = function() {
  store.dispatch(asyncDecrease());
};
window.fetchStudents=function(){
  store.dispatch(fetchStudents());
}
