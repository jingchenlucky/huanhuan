import React from 'react';

function StudentsAdd(props) {
  return (
    <>
      <div>添加学生</div>
      <button
        onClick={() => {
          props.history.push('/courses');
        }}
      >
        跳转到课程
      </button>
    </>
  );
}

export default StudentsAdd;