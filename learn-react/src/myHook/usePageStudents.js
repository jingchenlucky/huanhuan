import {useEffect, useState} from 'react';
import {getStudentsByPage} from '../services/student';

/**
 * 当组件首次加载完成后，获取所有学生
 * @returns {{}}
 */
export default function usePageStudents(page = 1, limit = 10) {
    const [resp, setResp] = useState();
    useEffect(() => {
        (async () => {
            const resp1 = await getStudentsByPage(page, limit);
            setResp(resp1);
        })();
    }, [page, limit])
    return resp;
}
