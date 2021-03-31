import React from 'react';
import { getAllStudents } from '../services/student';

function index() {
  // getAllStudents().then(res => console.log(res));
  return <div>欢迎页</div>;
}
//路由守卫
index.wrappers = ['@/routes/PrivateRouter'];
export default index;
