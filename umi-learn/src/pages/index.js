import React from 'react';
import { getAllStudents } from '../services/student';

export default function index() {
  // getAllStudents().then(res => console.log(res));
  return <div>欢迎页</div>;
}
index.wrappers = ['@/routes/PrivateRouter'];
