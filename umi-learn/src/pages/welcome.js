import React from 'react';

function welcome({ history }) {
  //页面跳转的两种方式：1通过import {history} from ’umi'.2 通过props传入的路由信息
  const id = localStorage.getItem('id');
  return (
    <div>
      欢迎页面{id}
      <button
        onClick={() => {
          localStorage.removeItem('loginId');
          history.push('/login');
        }}
      >
        注销
      </button>
    </div>
  );
}
welcome.wrappers = ['@/routes/PrivateRouter','@/routes/HandleTitle'];
welcome.title = '欢迎页';
export default welcome;
