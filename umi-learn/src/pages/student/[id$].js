import React from 'react';

export default function id(props) {
  console.log(props);
  return (
    <>
      <div>修改学生页</div>
  <div>学生id{props.match.params.id}</div>
    </>
  );
}
