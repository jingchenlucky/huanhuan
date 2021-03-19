import React from 'react';

export default function _layout(props) {
  return (
    <div>
      <h2>子页面导航</h2>
      {props.children}
    </div>
  );
}
