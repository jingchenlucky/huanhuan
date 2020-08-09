import React from 'react';
import useAllStudents from './myHook/useAllStudents';

function Test() {
    const stus = useAllStudents();
    const list = stus.map(it => (<li id={it.key}>{it.name}</li>))
    return (<ul>
        {list}
    </ul>)
}

function App() {
    return (
        <Test/>
    )

}


export default App;
