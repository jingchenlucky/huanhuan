import { connect } from 'umi';
import Menu from '../Menu';
import { routerRedux } from 'dva/router';
const mapStateToProps = state => ({
  loginId: state.loginUser,
});
const mapDispatchToProps = dispatch => ({
  loginOut() {
    dispatch({ type: 'loginUser/loginOut' });
    dispatch(routerRedux.push('/login'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
