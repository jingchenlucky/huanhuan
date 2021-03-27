import React from 'react';
import { NavLink } from 'umi';
import styles from './index.css';

export default function index() {
  return (
    <ul className={styles.nav}>
      <li>
        <NavLink to="/" />
        后台管理首页
      </li>
      <li>
        <NavLink to="/student" />
        学生查询
      </li>
      <li>
        <NavLink to="/student/add" />
        添加学生
      </li>
    </ul>
  );
}
