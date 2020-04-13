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
    const pageNumber = getPagerNumer(props);
    if(pageNumber===0){
        return null;
    }
    const min = getMinNumber(props);
    const max = getMaxNumber(min, pageNumber, props);
    const numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(<span
            onClick={() => {
                toPage(i, props)
            }}
            className={i===props.current?'item active':'item'} key={i}>{i}</span>)
    }
    return (
        <div>
            <span
                onClick={() => {
                    toPage(1, props)
                }}
                className={props.current === 1 ? 'item disabled' : 'item'}>首页</span>
            <span
                onClick={() => {
                    toPage(props.current - 1 < 1 ? 1 : props.current - 1, props)
                }}
                className={props.current === 1 ? 'item disabled' : 'item'}>上一页</span>
            {/*数字页码*/}
            {numbers}
            <span
                onClick={() => {
                    toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props)
                }}
                className={props.current === pageNumber ? 'item disabled' : 'item'}>下一页</span>
            <span
                onClick={() => {
                    toPage(pageNumber, props)
                }}
                className={props.current === pageNumber ? 'item disabled' : 'item'}>尾页</span>
            <span className="current">{props.current}</span>
            /
            <span>{pageNumber}</span>
        </div>
    );
}

/**
 * 计算最小数字
 */
function getMinNumber(props) {
    var min = props.current - Math.floor(props.panelNumber / 2)
    if (min < 1) {
        min = 1;
    }
    return min;
}

/**
 * 计算最大数字
 * @param {*} min
 * @param {*} pageNumber
 */
function getMaxNumber(min, pageNumber, props) {
    var max = min + props.panelNumber - 1;
    if (max > pageNumber) {
        max = pageNumber;
    }
    return max;
}

/**
 * 跳转到某一页
 * @param target 目标页码
 * @param props  所有参数
 */
function toPage(target, props) {
    console.log(target);
    if (props.current === target) {
        return;
    }
    props.onPageChange && props.onPageChange(target);
}

/**
 * 计算总页数
 * @param props
 * @returns {number}
 */
function getPagerNumer(props) {
    return Math.ceil(props.total / props.limit);
}

export default Pager;
