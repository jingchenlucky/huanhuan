import {createStore} from 'redux';
import reducer from './reducer';
import {createAddUserAction} from './action/usersAction';
import { v4 as uuidv4 } from 'uuid';

// const store = createStore(reducer,10);
const store = createStore(reducer);

console.log(store.getState());
store.dispatch(createAddUserAction({
    id:uuidv4(),
    name:'用户3',
    age:8
}))
console.log(store.getState());
