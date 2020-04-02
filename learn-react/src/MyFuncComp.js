import React from 'react';

export default function MyFuncComp(props) {
    // console.log(props);
    // props.number=90;//组件无法改变自身的属性
    return <h1>函数组件内容,当前的数字{props.number}</h1>
};
