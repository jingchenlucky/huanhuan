const appkey = 'huanhuan_1564064301241';

/**
 * 获取所有学生
 * @returns {Promise<any>}
 */
export async function getAllStudents() {
    return await fetch("api/student/findAll?appkey=" + appkey)
        .then(resp => resp.json()).then(resp => resp.data);

}

/**
 * 分页获取学生
 * @param page
 * @param limit
 * @returns {Promise<any>}
 */
export async function getStudentsByPage(page = 1, limit = 10) {
    return await fetch(`api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
        .then(resp => resp.json()).then(resp => resp.data)
}
