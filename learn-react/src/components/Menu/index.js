import React, {Component} from 'react';
import './index.css';
import {NavLink} from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <ul className="menu-content">
                <li><NavLink to="/students">学生列表</NavLink></li>
                <li><NavLink to="/students/add">添加学生</NavLink></li>
                <li><NavLink to="/courses">课程列表</NavLink></li>
                <li><NavLink to="/courses/add">添加课程</NavLink></li>
            </ul>
        );
    }
}
