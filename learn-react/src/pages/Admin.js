import React from 'react';
import {Route} from 'react-router-dom';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Menu from '../components/Menu'
import StudentList from './student/StudentList';
import StudentsAdd from './student/StudentsAdd';
import Course from './course/Course';
import CourseAdd from './course/CourseAdd';
import StudentDetail from './student/StudentDetail';

export default function Admin(props) {
    return (
        <Layout header={<Header/>} menu={<Menu/>}>
            <Route path="/students" exact component={StudentList}/>
            <Route path="/students/add" exact component={StudentsAdd}/>
            <Route path="/studentsDetail/:sNo" exact component={StudentDetail}/>
            <Route path="/courses" exact component={Course}/>
            <Route path="/courses/add" exact component={CourseAdd}/>
        </Layout>
    );
}
