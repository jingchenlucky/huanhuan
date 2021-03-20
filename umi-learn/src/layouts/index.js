import React from 'react';
import { NavLink } from 'umi';
import './index.css';

export default function index(props) {
  // const config = props.route.routes.find(
  //   it => it.path === props.location.pathname,
  // );
  // let title = '无标题';
  // if (config && config.title) {
  //   title = config.title;
  // }
  // document.title = title;
  return (
    <div>
      <NavLink to="/">首页</NavLink>
      <NavLink to="/login">登录</NavLink>
      <NavLink to="/welcome">欢迎1</NavLink>
      {props.children}
    </div>
  );
}
