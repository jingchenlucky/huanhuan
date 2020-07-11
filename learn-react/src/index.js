import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const Abc = <div><h1>哈啊哈</h1></div>;
// const Abc = <App/>;
// const Abc="这是一个字符串";
// const Abc=null;
// const Abc=[1,2,3,4,5];
// console.log(Abc);

const Abc = <div className="assaf">
    <h1>
        标题
        {["abc", null, <p>段落</p>]}
    </h1>
    <p>
        {undefined}
    </p>
</div>;
ReactDOM.render(
    <App/>,
    document.getElementById('root'))

