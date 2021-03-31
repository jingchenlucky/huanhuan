import { connect } from 'dva';
import StudentSearchBar from '../StudentSearchBar';

const mapStateToProps = state => ({
  defaultValue: {
    key: state.students.condition.key,
    sex: state.students.condition.sex,
  },
});
const mapDispatchToProps = dispatch => ({
  onSearch(newCondition) {
    newCondition.page = 1;
    dispatch({
      type: 'students/setCondition',
      payload: newCondition,
    });
    //条件变化后，地址栏发生改变，监听地址栏变化，触发fetchStudents，这里不用再触发，统一放在subscriptions
    // dispatch({
    //   type: 'students/fetchStudents',
    // });
  },
});
export default connect(mapStateToProps,mapDispatchToProps)(StudentSearchBar);
