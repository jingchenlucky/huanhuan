import React, {useEffect} from 'react';
import usePageStudents from './myHook/usePageStudents';

function Test() {
    const resp = usePageStudents(1, 10);
    if (resp) {//刚开始首次渲染的时候，resp为空，useEffect还没执行，在看到页面的时候useEffect才执行，resp才被赋值
        const list = resp.findByPage.map(it => (<li id={it.key}>{it.name}</li>))
        return (
            <div>
                <h1>数据总量：{resp.cont}</h1>
                <ul>
                    {list}
                </ul>
            </div>
        )
    } else {
        return null;
    }

}

function App() {
    return (
        <Test/>
    )

}


export default App;
