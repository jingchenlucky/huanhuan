import React from 'react';
import ReactDOM from 'react-dom';

const num=1;
const div1 = (
   <div title="234445">
       {num}
   </div>
)
console.log(div1);
// div1.props.title="666";//这里会报错
// console.log(div1);
ReactDOM.render(
    div1,
    document.getElementById('root')
);
