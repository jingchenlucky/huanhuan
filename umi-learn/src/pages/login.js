import React, { useRef } from 'react';
import {history} from 'umi';

function login() {
  const txtLoginId = useRef();
  const txtLoginPwd = useRef();
  return (
    <div>
      <p>
        账号:
        <input type="text" ref={txtLoginId} />
      </p>
      <p>
        密码:
        <input type="password" ref={txtLoginPwd} />
      </p>
      <p>
        <button
          onClick={() => {
            if (txtLoginPwd.current.value == '123') {
              localStorage.setItem('id', txtLoginId.current.value);
              history.push('/welcome');
            } else {
              alert('账户或者密码错误');
            }
          }}
        >
          登陆
        </button>
      </p>
    </div>
  );
}
login.title='登录页'
export default login;