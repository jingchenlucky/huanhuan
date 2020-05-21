const appkey = 'huanhuan_1564064301241';

export async function getAllStudents() {
    return await fetch("http://open.duyiedu.com/api/student/findAll?appkey=" + appkey)
        .then(resp => resp.json()).then(resp => resp.data);

}
