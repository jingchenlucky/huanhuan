import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from './components/StudentList'

const appkey = "huanhuan_1564064301241";

// 获取学生数据接口
async function fetchAllStudents() {
    const stus = await fetch("http://open.duyiedu.com/api/student/findAll?appkey=" + appkey)
        .then(resp => resp.json()).then(resp=>resp.data);
    return stus;
}

async function render(){
    ReactDOM.render("正在加载中",document.getElementById('root'));
    const stus=await fetchAllStudents();
    ReactDOM.render(<StudentList stus={stus}/>,document.getElementById('root'));
}
render();
