import React from 'react';
import { history } from 'umi';

export default function a() {
  return (
    <div>
      页面sub/a
      <button
        onClick={() => {
          history.push('/sub/b');
        }}
      >
        跳转到页面b
      </button>
    </div>
  );
}
