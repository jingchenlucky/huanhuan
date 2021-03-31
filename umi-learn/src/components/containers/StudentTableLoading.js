import Loading from '@/components/Loading';
import { connect } from 'dva';

const mapStateToProps = state => ({
    show: state.loading.effects['students / fetchStudents'],
//   show: true,
});
export default connect(mapStateToProps)(Loading);
