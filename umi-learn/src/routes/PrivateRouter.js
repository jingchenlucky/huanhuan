import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

function PrivateRouter(props) {
  //   console.log('++++++++++', props);
  if (props.loginId) {
    return props.children;
  } else {
    props.onNotLogin && props.onNotLogin();
    return null;
  }
}
const mapStateToProps = state => ({
  loginId: state.loginUser,
});
const mapDispatchToProps = dispatch => ({
  onNotLogin() {
    dispatch(routerRedux.push('/login'));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouter);
