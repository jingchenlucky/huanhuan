import {createStore, bindActionCreators} from 'redux';
import * as actionType from './action/action-type';
import * as numberAction from './action/number-action';

//假设仓库中存放了一个数组，该数组可能是+1/-1
//约定action格式:{type:'操作类型'，payload:附加数据}

/**
 * reducer本身是一个普通函数，
 * @param state 之前仓库中的状态（数据）
 * @param action  描述要做什么的对象
 * @returns {number|*}
 */
function reducer(state, action) {
    if (action.type === actionType.INCREASE) {
        //返回一个新的状态
        return state + 1;
    } else if (action.type === actionType.DECREASE) {
        return state - 1;
    } else if (action.type === actionType.SET) {
        return action.payload
    }
    return state;//如果是一个无效的操作，数据不变
}

const store = createStore(reducer, 10);

//第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch函数
//得到的新对象，新对象属性名与第一个参数的属性名一致
const bindAction = bindActionCreators(numberAction, store.dispatch);

////得到一个increase action，并直接分发
bindAction.getIncreaseAction();//向仓库分发action

console.log(store.getState());//得到仓库中当前的数据
// window.store.dispatch(numberAction.setAction(3));//向仓库分发action
bindAction.setAction(3);

console.log(store.getState());
