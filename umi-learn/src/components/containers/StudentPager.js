import { connect } from 'dva';
import Pager from '../Pager';

const mapStateToProps = state => ({
  current: state.students.condition.page,
  total: state.students.result.total,
  limit: state.students.condition.limit,
  panelNumber: 5,
});
const mapDispatchToProps = dispatch => ({
  onPageChange(newPage) {
    //重新设置条件
    dispatch({
      type: 'students/setCondition',
      payload: {
        page: newPage,
      },
    });
    //条件变化后，地址栏发生改变，监听地址栏变化，触发fetchStudents，这里不用再触发，统一放在subscriptions
    // //重新查询
    // dispatch({
    //   type: 'students/fetchStudents',
    // });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Pager);
