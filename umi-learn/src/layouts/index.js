import React from 'react';
import { NavLink } from 'umi'; //实际上就是react-router-dom中的NavLink组件
import WithRouterA from '@/components/A'; //在react-router-dom中需要用withRouter包裹 嵌套的组件才能拿到路由信息 history等  umi也是。
import Menu from '@/components/Menu'; //但是Menu是通过倒入的history进行跳转，不用包裹

export default function index(props) {
  return (
    <div>
      <div>
        <h1>全局上半部分</h1>
        {/* <h3>
                <NavLink to='/'>首页</NavLink>
                <NavLink to='/pageA'>首页A</NavLink>
                <NavLink to='/pageB'>首页B</NavLink>
            </h3> */}
        {/* <Menu />
        <WithRouterA /> */}
      </div>
      {props.children}
      <div>
        <h1>下半部分</h1>
      </div>
    </div>
  );
}
