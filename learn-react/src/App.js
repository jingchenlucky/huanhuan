import React, {useState} from 'react';

function App() {
    const [n, setN] = useState(0);
    const [visible, setVisible] = useState(true);
    console.log("渲染");
    return (
        <div>
            <p style={{display: visible ? 'block' : 'none'}}>

                <button onClick={() => {
                    setN(n - 1);//不会立即改变，事件运行完之后一起改变
                    setN(n - 1);//此时，n依然是0;
                }}>-
                </button>
                <span>{n}</span>
                <button onClick={() => {
                    setN(prevN => prevN + 1);
                    setN(prevN => prevN + 1);
                }}>+
                </button>
            </p>
            <button onClick={() => {
                setVisible(!visible);
            }}>显示/隐藏
            </button>

        </div>

    );
}


export default App;
