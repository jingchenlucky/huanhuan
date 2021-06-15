import store from './index';
import { change } from './action/student/searchCondition';
import {
  increase,
  decrease,
  asyncIncrease,
  asyncDecrease,
} from './action/count/index';
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
window.asyncDecrease = function() {
  store.dispatch(asyncDecrease());
};
