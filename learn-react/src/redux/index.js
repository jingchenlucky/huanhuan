import {createStore} from 'redux';
import * as numberAction from './action/number-action';
import {reducer} from './reducer';

// const store = createStore(reducer,10);
const store = createStore(reducer);
console.log(store.getState());

store.dispatch(numberAction.getIncreaseAction());

console.log(store.getState());
