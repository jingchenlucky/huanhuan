import React from 'react'
import { NavLink } from 'umi';

export default function index(props) {
    return (
        <div>
            <div><h1>全局上半部分</h1>
            <h3>
                <NavLink to='/'>首页</NavLink>
                <NavLink to='/pageA'>首页A</NavLink>
                <NavLink to='/pageB'>首页B</NavLink>
            </h3>
            </div>
            {props.children}
            <div><h1>下半部分</h1></div>
        </div>
    )
}
