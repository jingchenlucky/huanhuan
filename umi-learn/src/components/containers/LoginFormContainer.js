import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import LoginForm from '../LoginForm';
const mapDispatchToProps = dispatch => ({
  async onLogin(loginId, loginPwd) {
    //dispatch 触发异步 返回回来是一个promise
    const result = await dispatch({
      type: 'loginUser/login',
      payload: { loginId, loginPwd },
    });
    if (result) {
      dispatch(routerRedux.push('/'));
    } else {
      alert('账号密码错误');
    }
  },
});

export default connect(null, mapDispatchToProps)(LoginForm);
