import compose from './compose'
/**
 * 注册中间件
 * @param  {...any} middlewares   所有的中间件
 */
export default function(...middlewares) {
    console.log(middlewares) 
  return function(createStore) {//返回创建仓库方式的函数
    return function(reducer, defaultState) {//返回的函数用于创建仓库
        const store=createStore(reducer,defaultState);
        let dispatch=()=>{throw new Error("目前还不能使用dispatch")}
        const simpleStore={
            dispatch:store.dispatch,
            getState:store.getState
        }
        //根据中间件数组，得到一个dispatch创建函数的数组
        //中间件store参数只有dispatch/getState属性
        const dispatchProducers=middlewares.map(it=>it(simpleStore))
        dispatch=compose(...dispatchProducers)(store.dispatch);
        return{
            ...store,
            dispatch
        }
    };
  };
}
