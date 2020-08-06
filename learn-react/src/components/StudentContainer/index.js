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
            console.log("respresprespresp", resp);
            setStudents(resp.findByPage);
        })();
    }, [])//空数组的目的是让该副作用函数没有任何依赖，从而仅在首次挂载时运行
    return (
        <div>
            <StudentList stu={students}/>
        </div>
    );
}

export default StudentContainer;
