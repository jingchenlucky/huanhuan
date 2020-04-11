import React from 'react';
import './Pager.css';

/**
 * 分页组件
 * 属性：
 * 1. current：初始页码
 * 2. total：总数据量
 * 3. limit：页容量，每页显示的数据量
 * 4. panelNumber：数字页码最多显示多少个
 * 5. onPageChange：当页码改变的事件
 */
function Pager(props) {
    const pageNumber=getPagerNumer(props);
    console.log(pageNumber);
    return (
        <div>
            <span
                onClick={()=>{
                    if(props.current==1){
                        return;
                    }
                    props.onPageChange&&props.onPageChange(1);
                }}
                className={props.current===1?'item disabled':'item'}>首页</span>
            <span className={props.current===1?'item disabled':'item'}>上一页</span>
            <span className={props.current===pageNumber?'item disabled':'item'}>下一页</span>
            <span className={props.current===pageNumber?'item disabled':'item'}>尾页</span>
        </div>
    );
}
function getPagerNumer(props) {
    return Math.ceil(props.total/props.limit);
}

export default Pager;
