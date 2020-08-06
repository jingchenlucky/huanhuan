import {useEffect, useState} from 'react';
import {getAllStudents} from '../services/student';

export function useAllStudents() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        (async () => {
            const stus = await getAllStudents();
            setStudents(stus);
        })();
    }, [])
}
