import React, {useEffect, useState} from 'react';
import usePageStudents from './myHook/usePageStudents';

function Test() {
    const [page, setPage] = useState(1);
    const resp = usePageStudents(page, 10);
    if (resp) {//刚开始首次渲染的时候，resp为空，useRffect还没执行，在看到页面的时候useEffect才执行，resp才被赋值
        const list = resp.findByPage.map(it => (<li key={it.id}>{it.name}</li>))
        return (
            <div>
                <h1>数据总量：{resp.cont}</h1>
                <ul>
                    {list}
                </ul>
                <input type="number" value={page} onChange={(e) => {
                    setPage(parseInt(e.target.value))
                }}/>
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
