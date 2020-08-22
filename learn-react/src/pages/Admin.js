import React from 'react';
import {Route} from 'react-router-dom';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Menu from '../components/Menu'
import Students from './student/Students';
import StudentsAdd from './student/StudentsAdd';
import Course from './course/Course';
import CourseAdd from './course/CourseAdd';

export default function Admin(props) {
    return (
        <Layout header={<Header/>} menu={<Menu/>}>
            <Route path="/students" exact component={Students}/>
            <Route path="/students/add" exact component={StudentsAdd}/>
            <Route path="/courses" exact component={Course}/>
            <Route path="/courses/add" exact component={CourseAdd}/>
        </Layout>
    );
}
