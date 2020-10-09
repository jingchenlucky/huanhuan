import {createStore} from 'redux';

//假设仓库中存放了一个数组，该数组可能是+1/-1
//约定action格式:{type:'操作类型'，payload:附加数据}

/**
 * reducer本身是一个普通函数，
 * @param state 之前仓库中的状态（数据）
 * @param action  描述要做什么的对象
 * @returns {number|*}
 */
function reducer(state, action) {
    if (action.type === "increase") {
        //返回一个新的状态
        return state + 1;
    } else if (action.type === "decrease") {
        return state - 1;
    }
    return state;//如果是一个无效的操作，数据不变
}

window.store = createStore(reducer, 10);

const action = {
    type: 'decrease'
}

console.log(window.store.getState());//得到仓库中当前的数据

window.store.dispatch(action);//向仓库分发action

console.log(window.store.getState());
