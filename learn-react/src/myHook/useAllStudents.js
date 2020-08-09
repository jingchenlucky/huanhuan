import {useEffect, useState} from 'react';
import {getAllStudents} from '../services/student';

/**
 * 当组件首次加载完成后，获取所有学生
 * 第一次页面加载时没有获取到stus，在第一次渲染结束，看到页面Ui后执行useEffect
 * @returns {Array}
 */
export default function useAllStudents() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        (async () => {
            const stus = await getAllStudents();
            setStudents(stus);
        })();
    }, [])
    return students;
}
