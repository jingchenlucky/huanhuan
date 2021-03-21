import React from 'react';
import { NavLink } from 'umi';
import './index.css';
import '@/global.less';

export default function index(props) {
  return (
    <div>
      <NavLink exact to="/">
        首页
      </NavLink>
      <NavLink to="/login">登录</NavLink>
      <NavLink to="/welcome">欢迎1</NavLink>
      <NavLink to="/count">计数器</NavLink>
      {props.children}
    </div>
  );
}
