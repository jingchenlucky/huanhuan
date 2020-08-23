import React from 'react';
import StudentSearchBar from '../../components/StudentSearchBar'
import StudentTable from '../../components/StudentTable'
import {useState, useEffect} from "react";
import {searchStudents} from "../../services/student"
import qs from 'query-string';
import Pager from "../../components/common/Pager"

/**
 *
 *该函数用于获取地址栏参数中提供的查询条件，返回一个对象
 * 如果某些条件在地址中缺失，该函数会使用默认值
 * @constructor
 */
function getQuery(search) {
    const defaultQuery = {
        page: 1,
        limit: 10,
        key: "",
        sex: -1
    }
    let query = qs.parse(search);//将字符串转化为对象
    query = Object.assign({}, defaultQuery, query);
    query.limit = +query.limit;
    query.page = +query.page;
    query.sex = +query.sex;
    return query;
}

/**
 * 随着query(获取地址栏参数中提供的查询条件)改变，resp也要改变，自定义hook
 */
function useResp(query) {
    const [resp, setResp] = useState({cont: 0, datas: []});
    useEffect(() => {
        searchStudents({
            page: query.page,
            limit: query.limit,
            key: query.key,
            sex: query.sex
        }).then(resp => {
            setResp(resp);
        })
    }, [query.page, query.limit, query.key, query.sex])
    return resp;
}

function changeLocation(newQuery, history) {
    const search = qs.stringify(newQuery);//将对象转化为字符串
    // /将新的查询条件反应到地址中去，上下文变了，参数变了，会重新渲染组件
    history.push("?" + search);
}

function StudentList(props) {
    console.log("StudentList", props);
    const query = getQuery(props.location.search)
    const resp = useResp(query);
    console.log("88888", resp);
    // const [students, setStudents] = useState([]);
    // useEffect(() => {
    //     searchStudents().then(resp => {
    //         console.log("1235", resp);
    //         setStudents(resp.datas);
    //     })
    // }, [])
    return (
        <div>
            <StudentSearchBar
                defaultValue={{
                    key: query.key,
                    sex: query.sex
                }}
                onSearch={(cod) => {
                    console.log("查询的数据", cod);
                    const newQuery = {
                        ...query,
                        key: cod.key,
                        sex: cod.sex,
                        page: 1//下次查询结果从第一页开始
                    }
                    console.log("新的参数", newQuery);
                    //将新的查询条件反应到地址中去，上下文变了，参数变了，会重新渲染组件
                    changeLocation(newQuery, props.history);
                }}
            />
            <StudentTable stus={resp.datas}/>
            <div>
                <Pager
                    current={query.page}
                    total={resp.cont}
                    limit={query.limit}
                    panelNumber={5}
                    onPageChange={newPage => {
                        const newQuery = {
                            ...query,
                            page: newPage
                        }
                        changeLocation(newQuery, props.history);
                    }}
                />
            </div>
        </div>
    );
}

export default StudentList;
