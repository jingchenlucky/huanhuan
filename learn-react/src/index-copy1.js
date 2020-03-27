import React from 'react';
import ReactDOM from 'react-dom';

// const h1 = (<h1>efre<span>1</span><span>66666666</span></h1>)
// ReactDOM.render(
//     h1,
//     document.getElementById('root')
//
// );

const a = 1237, b = 432;
const obj = {c: 1};
const obj1 = <span>这是一个span元素对象</span>;
const arr = [1, 2, 3, 4, 5, 6];
const numbers = new Array(30);
numbers.fill(0);
var lis = numbers.map((item, i) => (<li key={i}>{i}</li>))
const div = (
    <div>
        {a}*{b}={a * b}
        <p>
            {/*{以下不会产生输出}*/}
            {null}
            {undefined}
            {false}
        </p>

        <p>
            {/*{普通对象无法放置}*/}
            {/*{obj}*/}
        </p>
        <p>
            {obj1}
        </p>
        <p>
            {/*放置数组，把每个元素拆开分别作为子元素*/}
            {arr}
        </p>
        <p>
            {lis}
        </p>
    </div>
);
// const div=React.createElement('div',{},`${a}*${b}=${a*b}`);//上面JSX先可以写成这种形式，jsx语法都可以转换为React.createElement
ReactDOM.render(
    div,
    document.getElementById('root')
);
