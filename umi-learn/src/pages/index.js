import React from 'react';
import { getAllStudents } from '../services/student';

export default function index() {
  getAllStudents().then(res => console.log(res));
  return <div></div>;
}
