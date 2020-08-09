import React, {useState} from 'react';
import useTimer from './myHook/useTimer';

function Test(props) {
    console.log(111111);
    useTimer(() => {
        console.log("Test组件的一些副作用操作")
    }, 1000);
    return <h1>Test组件</h1>
}

function App(props) {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            {visible && <Test/>}
            <button onClick={() => {
                setVisible(!visible)
            }}>显示/隐藏</button>
        </div>

    );
}

export default App;
