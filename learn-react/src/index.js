import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from './MyFuncComp';
import MyClassComp from './MyClassComp';

// function MyFuncComp() {
//     return <h1>组件内容1</h1>
// }
const comp = <MyFuncComp/>;

ReactDOM.render(
    <div>
        {/*{comp}*/}
        <MyFuncComp number="1"/>
        <MyFuncComp number={2}/>
        <MyFuncComp number={3}/>
        <MyFuncComp number={4}/>
        <MyFuncComp/>
        <MyClassComp a="123" enable/>
        <MyClassComp a={21} obj={{
            name:'cj',
            age:100
        }}/>
        <MyClassComp a={22} ui={<h2>这是我传递属性</h2>}/>
        <MyClassComp a={23}/>
        <MyClassComp/>
    </div>,
    document.getElementById('root'));
