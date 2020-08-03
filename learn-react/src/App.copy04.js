import React, {useState, useEffect} from 'react';

function Test() {
    useEffect(() => {
        console.log("依赖空数组，副作用函数，仅渲染时执行一次");
        return (() => {
            console.log("依赖空数组，清理函数，仅卸载时执行一次");
        })
    },[])//使用空数组作为依赖，则副作用只在挂载的时候运行一次。第二次渲染的时候，还是空数组，会认为没有改变
    console.log("移动函数222,异步的，会先于useEffect运行");
    const [, forceUpdate] = useState({});
    return (
        <h1>Test组件
            <button onClick={() => {
                forceUpdate({})
            }}>刷新组件</button>
        </h1>

    );
}

function App() {
    const [point, setPoint] = useState({x: 100, y: 100});
    const [visible, setVisible] = useState(true);
    const txtX = React.createRef();
    const txtY = React.createRef();
    return (
        <div style={{paddingTop: 100}}>
            {visible && <Test/>}
            <button onClick={() => {
                setVisible(!visible);
            }}>显示/隐藏
            </button>
        </div>

    );
}


export default App;
