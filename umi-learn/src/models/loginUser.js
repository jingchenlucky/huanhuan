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
      }
    },
    *loginOut(action, { put }) {
      localStorage.removeItem('loginId');
      yield put({ type: 'setLoginUser', payload: null });
    },
  },
};
