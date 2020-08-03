import React, {useState, useEffect} from 'react';

function App() {
    const [x, setX] = useState(10);
    useEffect(() => {
        if (x === 1) {
            return;
        }
        //某一次渲染结束后，需要根据当前x的值，1秒后重新熏染
        setTimeout(() => {
            setX(x - 1);
        }, 1000)
    }, [x]);
    return (
        <div>
            <span>{x}</span>
            <button onClick={() => {
                setX(x + 1);
            }}>x+1
            </button>
        </div>

    );
}


export default App;
