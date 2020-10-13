import {createStore} from 'redux';
import reducer from './reducer';
import {createAddUserAction,deleteUserAction} from './action/usersAction';
// import { v4 as uuidv4 } from 'uuid';

// const store = createStore(reducer,10);
const store = createStore(reducer);
console.log("仓库store",store) ;

store.subscribe(()=>{
    console.log("状态发生改变了,在分发过action之后运行");
})
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(createAddUserAction({
    id:3,
    name:'用户3333',
    age:8
}))
store.dispatch(deleteUserAction(3));
