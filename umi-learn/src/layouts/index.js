import React from 'react';
import Layout from '@/components/Layout';
import Left from '@/components/Left';
// import Menu from '@/components/Menu';
import MenuContainer from '@/components/containers/MenuContainer';
export default function index(props) {
  // console.log('通用布局参数', props);
  if (props.location.pathname === '/login') {
    return <div>{props.children}</div>;
  } else {
    return <Layout header={<MenuContainer />} left={<Left />} right={props.children} />;
  }
}
