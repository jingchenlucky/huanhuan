import React from 'react';
import { Link } from 'umi';

export default function PrivateRouter(props) {
  var id = localStorage.getItem('id');
  if (id !== 'null') {
    return props.children;
  } else {
    document.title = '请先登录';
    return (
      <div>
        <Link to="/login">请先登录</Link>
      </div>
    );
  }
}
