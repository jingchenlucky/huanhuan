import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
function StudentsAdd(props) {
  return (
    <>
      <div>添加学生</div>
      <button
        onClick={() => {
          props.click && props.click();
        }}
      >
        跳转到课程
      </button>
    </>
  );
}
const mapDispatchToProps = dispatch => ({
  click: () => dispatch(push('/courses')),
});
export default connect(null, mapDispatchToProps)(StudentsAdd);
