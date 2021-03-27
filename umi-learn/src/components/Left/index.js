import React from 'react';
import { NavLink } from 'umi';
import styles from './index.css';

export default function index() {
  return (
    <ul className={styles.nav}>
      <li>
        <NavLink exact to="/" activeClassName={styles.active}>后台管理系统</NavLink>
      </li>
      <li>
        <NavLink exact to="/student"activeClassName={styles.active}>学生查询</NavLink>
      </li>
      <li>
        <NavLink exact to="/student/add" activeClassName={styles.active}>添加学生</NavLink>
      </li>
    </ul>
  );
}
