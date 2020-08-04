import React, {useEffect, useState} from 'react';
import StudentList from '../StudentList';
import {getStudentsByPage} from '../../services/student';

/**
 * 用于提供数据，以及控制数据的变化
 * @param props
 * @returns {*}
 * @constructor
 */
function StudentContainer(props) {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        (async function () {
            const resp = await getStudentsByPage(1, 10);
            setStudents(resp.findByPage);
        })();
    })
    return (
        <div>
            <StudentList stu={students}/>
        </div>
    );
}

export default StudentContainer;
