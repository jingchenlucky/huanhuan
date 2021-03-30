// import { history } from 'umi';
import { routerRedux } from 'dva/router';
export default {
  state: null,
  reducers: {
    setLoginUser(state, action) {
      return action.payload;
    },
  },
  effects: {
    *login(action, { put }) {
      const { loginId, loginPwd } = action.payload;
      if (loginId == 'admin' && loginPwd == '123456') {
        yield put({ type: 'setLoginUser', payload: loginId });
        localStorage.setItem('loginId', loginId);
        //1可以在请求接口这里统一处理
        // 页面跳转的两种方式
        // history.push('/')
        // yield put(routerRedux.push('/'));//分发一个action的方式页面跳转
        //2.也可以在LoginFormContainer中对接口返回回来对结果处理
        return true;
      } else {
        // alert('账号密码错误');
        return false;
      }
    },
    *loginOut(action, { put }) {
      localStorage.removeItem('loginId');
      yield put({ type: 'setLoginUser', payload: null });
    },
  },
  subscriptions:{
    //在一开始时 将本地存储同步到state,刷新页面后页面重新运行，state会被初始化
    syncLocalstorage({dispatch}){
      const loginId=localStorage.getItem('loginId');
      if(loginId){
        dispatch({
          type: 'setLoginUser', payload: loginId 
        })
      }
    }
  }
};
